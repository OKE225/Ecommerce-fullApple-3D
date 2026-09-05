import AddToCartButton from "@/components/AddToCartButton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProductByID } from "@/lib/data/products";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";
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
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <Badge variant="secondary">{product.category.name}</Badge>
        <h1 className="text-2xl font-bold">{product.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            {product.imageUrl ? (
              <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="eager"
                  priority
                />
              </div>
            ) : (
              <div className="flex aspect-square items-center justify-center rounded-lg bg-muted text-muted-foreground">
                No image available
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              ${product.price}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {product.description && (
              <p className="text-muted-foreground">{product.description}</p>
            )}

            <Separator />

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground">Year:</span>{" "}
                <span className="font-medium">{product.year}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Availability:</span>{" "}
                <span
                  className={
                    product.stock > 0
                      ? "font-medium text-green-600"
                      : "font-medium text-red-600"
                  }>
                  {product.stock > 0
                    ? `In stock: ${product.stock}`
                    : "Out of stock"}
                </span>
              </div>
            </div>

            <AddToCartButton product={product} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Specifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-3/5 text-base">Parameter</TableHead>
                <TableHead className="text-base">Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Screen size</TableCell>
                <TableCell>{product.screen_size_inch}&quot;</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Screen resolution</TableCell>
                <TableCell>{product.screen_resolution}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Screen type</TableCell>
                <TableCell>{product.screen_type}</TableCell>
              </TableRow>

              {/* Performance */}
              <TableRow>
                <TableCell className="font-medium">CPU</TableCell>
                <TableCell>{product.cpu}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">RAM</TableCell>
                <TableCell>{product.ram_gb} GB</TableCell>
              </TableRow>

              {/* Battery */}
              <TableRow>
                <TableCell className="font-medium">Battery capacity</TableCell>
                <TableCell>{product.battery_size} mAh</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Charging wattage</TableCell>
                <TableCell>{product.charging_wattage} W</TableCell>
              </TableRow>

              {/* Dimensions & weight */}
              <TableRow>
                <TableCell className="font-medium">Height</TableCell>
                <TableCell>{product.height_mm} mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Width</TableCell>
                <TableCell>{product.width_mm} mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Depth</TableCell>
                <TableCell>{product.depth_mm} mm</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>{product.weight_g} g</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
