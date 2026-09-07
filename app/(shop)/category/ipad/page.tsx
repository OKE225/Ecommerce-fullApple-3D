import ProductsGridWithSort from "@/components/ProductsGridWithSort";
import { getProductsByCategory } from "@/lib/data/products";

export default async function iPadCategoryPage() {
  const products = await getProductsByCategory("iPad");

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Products</h2>
      </div>

      <ProductsGridWithSort products={products} />
    </div>
  );
}
