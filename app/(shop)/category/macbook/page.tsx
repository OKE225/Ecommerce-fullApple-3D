import ProductsWithSortAndSearch from "@/components/ProductsWithSortAndSearch";
import { getProductsByCategory } from "@/lib/data/products";

export default async function MacBookCategoryPage() {
  const products = await getProductsByCategory("MacBook");

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Products</h2>
      </div>

      <ProductsWithSortAndSearch products={products} />
    </div>
  );
}
