import ProductCard from "@/components/ProductCard";
import { getAllProducts } from "@/lib/data/products";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main>
      <h2 className="text-2xl font-bold mt-5 mb-2">Products</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* <IPhoneHeroSection /> */}
    </main>
  );
}
