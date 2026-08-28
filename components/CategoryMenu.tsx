import { House, Laptop, Smartphone, Tablet } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import CategoryMenuItem from "./CategoryMenuItem";

const CategoryMenu = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <CategoryMenuItem icon={House}>Home</CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem icon={Smartphone}>iPhone</CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem icon={Laptop}>macBook</CategoryMenuItem>

      <Separator orientation="vertical" className="h-6 my-auto" />

      <CategoryMenuItem icon={Tablet}>iPad</CategoryMenuItem>
    </div>
  );
};

export default CategoryMenu;
