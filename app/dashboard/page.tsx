import { getAllProducts } from "@/lib/data/products";
import DashboardClient from "@/components/DashboardClient";

export default async function DashboardPage() {
  const products = await getAllProducts();

  return <DashboardClient products={products} />;
}
