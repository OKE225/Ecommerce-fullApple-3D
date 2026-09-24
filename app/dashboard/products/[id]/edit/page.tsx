import { getAllCategories, getProductByID } from "@/lib/data/products";
import { notFound } from "next/navigation";
import ProductEdit from "./ProductEdit";

interface PageProps {
  params: Promise<{ id: string }>;
}

const EditProductPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const products = await getProductByID(id);
  const categories = await getAllCategories();

  const product = products[0];

  if (!product) {
    notFound();
  }

  return <ProductEdit categories={categories} product={product} />;
};

export default EditProductPage;
