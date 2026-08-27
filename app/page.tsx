"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Terminal } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      setUserEmail(user?.email ?? null);
      setLoading(false);
    });
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUserEmail(null);
    router.refresh(); // refreshes server data if you use it
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-linear-to-b from-slate-50 to-slate-100 font-sans p-4">
      <main className="w-full max-w-3xl space-y-8">
        {/* Info alert */}
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>shadcn/ui Demo</AlertTitle>
          <AlertDescription>
            This project uses shadcn/ui components. Below you will see Button,
            Card, Alert and Badge in action.
          </AlertDescription>
        </Alert>

        {/* Auth section in Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>User Panel</span>
              {!loading && userEmail && (
                <Badge variant="secondary">Logged In</Badge>
              )}
            </CardTitle>
            <CardDescription>
              {!loading && userEmail
                ? "Welcome back! Here are your details."
                : "Log in or sign up to continue."}
            </CardDescription>
          </CardHeader>

          <CardContent>
            {!loading && userEmail ? (
              <div className="space-y-4">
                <div className="rounded-lg border bg-zinc-50 p-4 dark:bg-zinc-900">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Logged in as:
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    {userEmail}
                  </p>
                </div>

                <div className="grid gap-2">
                  <p className="text-sm font-medium">Quick actions:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm">
                      Edit Profile
                    </Button>
                    <Button variant="outline" size="sm">
                      Settings
                    </Button>
                    <Button variant="outline" size="sm">
                      History
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-lg border bg-zinc-50 p-4 dark:bg-zinc-900">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    Status:
                  </p>
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">
                    Not logged in
                  </p>
                </div>

                <div className="grid gap-2">
                  <p className="text-sm font-medium">Available actions:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button size="sm">Browse</Button>
                    <Button variant="secondary" size="sm">
                      Pricing
                    </Button>
                    <Button variant="outline" size="sm">
                      Contact
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex flex-col gap-3 sm:flex-row">
            {!loading && userEmail ? (
              <Button
                onClick={handleLogout}
                variant="destructive"
                className="w-full sm:w-auto">
                Log Out
              </Button>
            ) : (
              <>
                <Button
                  onClick={() => router.push("/login")}
                  className="w-full sm:w-auto">
                  Log In
                </Button>
                <Button
                  onClick={() => router.push("/signup")}
                  variant="outline"
                  className="w-full sm:w-auto">
                  Sign Up
                </Button>
              </>
            )}
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
// Create template supabase auth with shadcnUI
