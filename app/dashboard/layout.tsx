import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LayoutDashboard, Package, PlusCircle, Undo2 } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="pt-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="rounded-full">
            <Button variant="ghost" size="icon">
              <Undo2 />
            </Button>
          </Link>

          <Separator orientation="vertical" className="my-auto h-6" />

          <Link href="/dashboard" className="rounded-full">
            <Button variant="ghost" size="icon">
              <LayoutDashboard />
            </Button>
          </Link>

          <Link href="/dashboard/products" className="rounded-full">
            <Button variant="ghost">
              <Package className="h-4 w-4" /> Products
            </Button>
          </Link>

          <Link href="/dashboard/products/create" className="rounded-full">
            <Button>
              <PlusCircle className="h-4 w-4" />
              Add Product
            </Button>
          </Link>
        </div>

        <Separator className="mt-4" />
      </nav>

      <main className="my-10">{children}</main>

      <Footer />
    </>
  );
}
