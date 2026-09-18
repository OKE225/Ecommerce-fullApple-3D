"use client";

import { Apple, ShoppingBag, UserRound, LayoutDashboard } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CategoryMenu from "./CategoryMenu";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useUserRole } from "@/context/UserRoleContext";

const Navbar = () => {
  const { items } = useCart();
  const { role } = useUserRole();

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="mt-4">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-1">
          <Apple />
          <span className="text-md font-semibold">
            <span className="text-zinc-500 font-normal">full</span>Apple
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <Link
                href="/dashboard"
                className="group flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-1 py-1 text-blue-950 shadow-sm transition-all hover:border-blue-300 hover:bg-blue-100 hover:shadow-md dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-100 dark:hover:bg-blue-950/70"
                aria-label="Otwórz panel administratora">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white shadow-sm transition-transform group-hover:scale-105">
                  <LayoutDashboard className="h-3.5 w-3.5" />
                </span>

                <span className="hidden leading-none sm:block">
                  <span className="block text-sm font-semibold leading-none">
                    Dashboard
                  </span>
                </span>

                <Badge
                  variant="outline"
                  className="hidden h-5 rounded-full border-blue-300 px-1.5 text-[9px] uppercase tracking-wide sm:inline-flex dark:border-blue-700">
                  Admin
                </Badge>
              </Link>

              <Separator orientation="vertical" className="my-auto h-6" />
            </>
          )}

          <Link href="/basket" className="rounded-full">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 min-w-5 px-1 text-xs">
                {totalQuantity > 9 ? "+9" : totalQuantity}
              </Badge>
            </Button>
          </Link>

          <Separator orientation="vertical" className="mx-1 h-6 my-auto" />

          <Link href="/profile" className="rounded-full">
            <Button variant="ghost" size="icon">
              <UserRound />
            </Button>
          </Link>
        </div>
      </div>

      <Separator className="my-4" />

      <div className="block">
        <CategoryMenu />
      </div>
    </nav>
  );
};

export default Navbar;
