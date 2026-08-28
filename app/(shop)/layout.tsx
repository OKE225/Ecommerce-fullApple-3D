import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="my-25">{children}</main>
      <Footer />
    </>
  );
}
