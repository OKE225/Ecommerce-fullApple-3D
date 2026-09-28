import { LucideIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  href: string;
  isActive: boolean;
  children: React.ReactNode;
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
        "font-medium",
      )}>
      <Icon />
      <span className="max-sm:hidden">{children}</span>
    </Link>
  );
};

export default CategoryMenuItem;
