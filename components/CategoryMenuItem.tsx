import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

const CategoryMenuItem = ({ children, icon: Icon }: Props) => {
  return (
    <Button variant="ghost" className="gap-2 font-medium cursor-pointer">
      <Icon />
      <span>{children}</span>
    </Button>
  );
};

export default CategoryMenuItem;
