"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const ProfilePage = () => {
  const router = useRouter();

  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleLogout = async () => {
    setIsSigningOut(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Błąd wylogowania:", error.message);
      setIsSigningOut(false);
      return;
    }
    router.push("/login");
  };

  return (
    <Button
      variant="destructive"
      onClick={handleLogout}
      disabled={isSigningOut}>
      <LogOut className="h-4 w-4" />
      {isSigningOut ? "Signing out…" : "Sign out"}
    </Button>
  );
};

export default ProfilePage;
