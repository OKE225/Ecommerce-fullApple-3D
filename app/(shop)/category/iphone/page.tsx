import ProductsGridWithSort from "@/components/ProductsGridWithSort";
import { getProductsByCategory } from "@/lib/data/products";

export default async function iPhoneCategoryPage() {
  const products = await getProductsByCategory("iPhone");

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">Products</h2>
      </div>

      <ProductsGridWithSort products={products} />
    </div>
  );
}
