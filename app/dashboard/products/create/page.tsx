import { getAllCategories } from "@/lib/data/products";
import ProductCreate from "./ProductCreate";

const CreateProductPage = async () => {
  const categories = await getAllCategories();

  return (
    <div>
      <ProductCreate categories={categories} />
    </div>
  );
};

export default CreateProductPage;
