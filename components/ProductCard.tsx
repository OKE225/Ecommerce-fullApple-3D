import Link from "next/link";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";

interface Props {
  product: { id: string; name: string; price: number; imageUrl: string };
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`}>
      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <CardContent className="p-4">
          <div className="aspect-square overflow-hidden rounded-md mb-3">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
                loading="lazy"
                width={300}
                height={300}
              />
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                No image
              </div>
            )}
          </div>

          <CardTitle className="text-base">{product.name}</CardTitle>
          <CardDescription>{product.price} $</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
