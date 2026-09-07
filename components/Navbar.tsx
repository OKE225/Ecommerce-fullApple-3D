"use client";

import { Apple, ShoppingBag, UserRound } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CategoryMenu from "./CategoryMenu";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { items } = useCart();

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
