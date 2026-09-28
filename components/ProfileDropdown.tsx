"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { LogOut, UserRound } from "lucide-react";

export default function ProfileDropdown() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

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

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full"
        onClick={() => setOpen(!open)}>
        <UserRound className="h-5 w-5" />
      </Button>

      {open && (
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
