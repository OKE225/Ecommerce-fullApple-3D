"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, UserRound } from "lucide-react";

export default function ProfileDropdown() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsLoggedIn(!!session);
      setLoading(false);
    };

    checkAuth();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    setOpen(!open);
  };

  const handleLogout = async () => {
    setIsSigningOut(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Logout error:", error.message);
      setIsSigningOut(false);
      return;
    }
    setOpen(false);
    router.push("/login");
  };

  if (loading) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full" disabled>
        <UserRound className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={handleClick}>
        <UserRound className="h-5 w-5" />
      </Button>

      {open && isLoggedIn && (
        <div className="absolute right-0 top-full mt-2 z-50 w-48 animate-in fade-in zoom-in-95 duration-200 rounded-4xl border bg-popover p-2 text-popover-foreground shadow-md outline-none">
          <div className="space-y-1">
            <Button
              variant="destructive"
              className="w-full justify-start gap-2 font-normal"
              onClick={handleLogout}
              disabled={isSigningOut}>
              <LogOut className="h-4 w-4" />
              {isSigningOut ? "Signing out…" : "Sign out"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
