import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProductByID } from "@/lib/data/products";
import { notFound } from "next/navigation";
import React from "react";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;

  const products = await getProductByID(id);
  const product = Array.isArray(products) ? products[0] : products;

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-semibold">{product.price} $</p>
          {product.description && (
            <p className="mt-4 text-muted-foreground">{product.description}</p>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
