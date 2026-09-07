import ProductsWithSortAndSearch from "@/components/ProductsWithSortAndSearch";
import { getAllProducts } from "@/lib/data/products";

export default async function AllProductsPage() {
  const products = await getAllProducts();

  return (
    <main>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Products</h2>
      </div>

      <ProductsWithSortAndSearch products={products} />
    </main>
  );
}
