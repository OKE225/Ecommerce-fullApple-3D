"use client";

import { Laptop, Smartphone, Tablet, LayoutGrid } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CategoryMenuItem from "./CategoryMenuItem";
import { usePathname } from "next/navigation";

const CategoryMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <CategoryMenuItem
        icon={LayoutGrid}
        href="/category/all"
        isActive={pathname === "/category/all"}>
        All
      </CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem
        icon={Smartphone}
        href="/category/iphone"
        isActive={pathname === "/category/iphone"}>
        iPhone
      </CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem
        icon={Laptop}
        href="/category/macbook"
        isActive={pathname === "/category/macbook"}>
        MacBook
      </CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem
        icon={Tablet}
        href="/category/ipad"
        isActive={pathname === "/category/ipad"}>
        iPad
      </CategoryMenuItem>
    </div>
  );
};

export default CategoryMenu;
