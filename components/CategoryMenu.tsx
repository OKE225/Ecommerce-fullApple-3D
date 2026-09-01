"use client";

import { House, Laptop, Smartphone, Tablet } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CategoryMenuItem from "./CategoryMenuItem";
import { usePathname } from "next/navigation";

const CategoryMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-wrap items-center gap-2">
      <CategoryMenuItem icon={House} href="/" isActive={pathname === "/"}>
        Home
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
