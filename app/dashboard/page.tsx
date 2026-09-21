import { getUserRole } from "@/lib/supabase/server-role";
import { getAllProducts } from "@/lib/data/products";
import { redirect } from "next/navigation";
import DashboardClient from "@/components/DashboardClient";

export default async function DashboardPage() {
  const role = await getUserRole();

  if (role !== "admin") {
    redirect("/");
  }

  const products = await getAllProducts();

  return <DashboardClient products={products} />;
}
