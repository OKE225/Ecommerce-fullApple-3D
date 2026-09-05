"use client";

import { Apple, CircleUserRound, ShoppingBag } from "lucide-react";
import SearchInput from "./SearchInput";
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

        <div className="hidden flex-1 px-4 md:block">
          <SearchInput />
        </div>

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
              <CircleUserRound />
            </Button>
          </Link>
        </div>
      </div>

      <div className="md:hidden">
        <SearchInput />
      </div>

      <Separator className="my-5" />

      <div className="hidden md:block">
        <CategoryMenu />
      </div>
    </nav>
  );
};

export default Navbar;
