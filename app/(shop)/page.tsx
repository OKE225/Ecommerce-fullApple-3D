import { getAllProducts } from "@/lib/data/products";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi vero,
      commodi repellat nesciunt iusto vitae sed illo qui nostrum amet soluta
      reprehenderit, facere inventore est aliquid! Accusamus, modi voluptatum?
    </main>
  );
}
