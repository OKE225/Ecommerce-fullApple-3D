import { getProductsByCategory } from "@/lib/data/products";

export default async function MacBookCategoryPage() {
  const products = await getProductsByCategory("MacBook");

  return (
    <div>
      <h2 className="text-2xl font-bold mt-5 mb-2">Products</h2>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="bg-slate-200 rounded-xl p-5">
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <p>Stock: {product.stock}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
