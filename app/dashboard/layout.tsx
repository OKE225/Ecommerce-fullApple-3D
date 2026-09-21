import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/" className="rounded-full">
            <Button variant="ghost" size="icon">
              <Undo2 />
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
