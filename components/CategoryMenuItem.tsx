import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  href: string;
  isActive: boolean;
}

const CategoryMenuItem = ({
  children,
  icon: Icon,
  href,
  isActive = false,
}: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: isActive ? "default" : "secondary" }),
        "gap-2 font-medium",
      )}>
      <Icon />
      <span>{children}</span>
    </Link>
  );
};

export default CategoryMenuItem;
