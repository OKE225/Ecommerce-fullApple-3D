"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="flex h-125 flex-col items-center justify-center gap-6 text-center">
      <div className="space-y-2">
        <h1 className="text-8xl font-bold text-rose-600">404</h1>
        <h2 className="text-3xl font-semibold text-rose-600">Page not found</h2>
        <p className="mx-auto max-w-xs text-muted-foreground">
          It looks like the page you&apos;re looking for doesn&apos;t exist or
          has been removed
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "destructive" }),
            "gap-2 font-medium",
          )}>
          <Home className="h-4 w-4" />
          <span>Back to home</span>
        </Link>
      </div>
    </div>
  );
}
