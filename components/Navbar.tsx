import { Apple, CircleUserRound, ShoppingBasket } from "lucide-react";
import SearchInput from "./SearchInput";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CategoryMenu from "./CategoryMenu";

const Navbar = () => {
  return (
    <nav className="mt-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Apple />
          <span className="text-md font-semibold">
            <span className="text-zinc-500">full</span>Apple
          </span>
        </div>

        <div className="hidden flex-1 px-4 md:block">
          <SearchInput />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <a href="/basket">
              <ShoppingBasket />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 min-w-5 px-1 text-xs">
                0
              </Badge>
            </a>
          </Button>

          <Separator orientation="vertical" className="mx-1 h-6 my-auto" />

          <Button variant="ghost" size="icon">
            <a href="/profile">
              <CircleUserRound />
            </a>
          </Button>
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
