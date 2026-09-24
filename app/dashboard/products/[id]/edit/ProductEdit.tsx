"use client";

import { CategorySelect } from "./CategorySelect";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { ShopProduct } from "@/types/ProductsTypes";
import { useState } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { updateProduct } from "@/lib/actions/products";

interface Props {
  categories: {
    id: number;
    name: string;
  }[];
  product: ShopProduct;
}

interface ProductFormData {
  category_id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  year: number;
  screen_size_inch: number;
  screen_resolution: string;
  screen_type: string;
  cpu: string;
  ram_gb: number;
  battery_size: number;
  charging_wattage: number;
  height_mm: number;
  width_mm: number;
  depth_mm: number;
  weight_g: number;
}

const ProductEdit = ({ categories, product }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<ProductFormData>({
    category_id: product.category_id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    description: product.description ?? "",
    year: product.year,
    screen_size_inch: product.screen_size_inch,
    screen_resolution: product.screen_resolution,
    screen_type: product.screen_type,
    cpu: product.cpu,
    ram_gb: product.ram_gb,
    battery_size: product.battery_size,
    charging_wattage: product.charging_wattage,
    height_mm: product.height_mm,
    width_mm: product.width_mm,
    depth_mm: product.depth_mm,
    weight_g: product.weight_g,
  });

  const updateField = <K extends keyof ProductFormData>(
    field: K,
    value: ProductFormData[K],
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      await updateProduct(product.id, formData);
      router.refresh();
      router.replace("/dashboard/products");
    } catch (error) {
      console.error("Failed to update product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto space-y-6">
      <div className="space-x-10 flex items-center">
        <Field className="w-75">
          <FieldLabel htmlFor="product-name">Product name</FieldLabel>
          <Input
            id="product-name"
            className="font-semibold"
            type="text"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            disabled={isLoading}
          />
        </Field>

        <Field className="min-w-35 w-fit">
          <FieldLabel htmlFor="select-category">Select category</FieldLabel>

          <CategorySelect
            categories={categories}
            productCategoryId={product.category.id}
            onCategoryChange={(categoryID) =>
              updateField("category_id", categoryID)
            }
            isLoading={isLoading}
          />
        </Field>
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
            <CardTitle>
              <Field className="w-40">
                <FieldLabel htmlFor="price">Price</FieldLabel>
                <InputGroup>
                  <InputGroupAddon>
                    <InputGroupText>$</InputGroupText>
                  </InputGroupAddon>
                  <InputGroupInput
                    placeholder="0.00"
                    type="number"
                    className="font-semibold"
                    id="price"
                    min={0}
                    value={formData.price ? formData.price : ""}
                    onChange={(e) =>
                      updateField("price", Number(e.target.value))
                    }
                    disabled={isLoading}
                  />
                  <InputGroupAddon align="inline-end">
                    <InputGroupText>USD</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Field>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {product.description && (
              <Textarea
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                className="text-muted-foreground max-h-60"
                placeholder="Type your description here"
                disabled={isLoading}
              />
            )}

            <Separator />

            <div className="grid grid-cols-2 gap-3 text-sm">
              <Field className="w-35">
                <FieldLabel htmlFor="year">Year</FieldLabel>
                <Input
                  id="year"
                  type="number"
                  value={formData.year ? formData.year : ""}
                  onChange={(e) => updateField("year", Number(e.target.value))}
                  max={2050}
                  min={1000}
                  disabled={isLoading}
                />
              </Field>

              <Field className="w-35">
                <FieldLabel htmlFor="stock">In stock</FieldLabel>
                <Input
                  id="stock"
                  type="number"
                  value={formData.stock ? formData.stock : ""}
                  onChange={(e) => updateField("stock", Number(e.target.value))}
                  min={0}
                  disabled={isLoading}
                />
              </Field>
            </div>
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
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={
                        formData.screen_size_inch
                          ? formData.screen_size_inch
                          : ""
                      }
                      onChange={(e) =>
                        updateField("screen_size_inch", Number(e.target.value))
                      }
                      min={0}
                      placeholder="6,9"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">&quot;</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Screen resolution</TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={formData.screen_resolution}
                    onChange={(e) =>
                      updateField("screen_resolution", e.target.value)
                    }
                    placeholder="1320x2868"
                    disabled={isLoading}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Screen type</TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={formData.screen_type}
                    onChange={(e) => updateField("screen_type", e.target.value)}
                    placeholder="Retina"
                    disabled={isLoading}
                  />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">CPU</TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={formData.cpu}
                    onChange={(e) => updateField("cpu", e.target.value)}
                    placeholder="Apple A18"
                    disabled={isLoading}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">RAM</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.ram_gb ? formData.ram_gb : ""}
                      onChange={(e) =>
                        updateField("ram_gb", Number(e.target.value))
                      }
                      min={0}
                      placeholder="8"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">GB</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Battery capacity</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.battery_size ? formData.battery_size : ""}
                      onChange={(e) =>
                        updateField("battery_size", Number(e.target.value))
                      }
                      min={0}
                      placeholder="4685"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">mAh</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Charging wattage</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={
                        formData.charging_wattage
                          ? formData.charging_wattage
                          : ""
                      }
                      onChange={(e) =>
                        updateField("charging_wattage", Number(e.target.value))
                      }
                      min={0}
                      placeholder="25"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">W</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Height</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.height_mm ? formData.height_mm : ""}
                      onChange={(e) =>
                        updateField("height_mm", Number(e.target.value))
                      }
                      min={0}
                      placeholder="163"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">mm</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Width</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.width_mm ? formData.width_mm : ""}
                      onChange={(e) =>
                        updateField("width_mm", Number(e.target.value))
                      }
                      min={0}
                      placeholder="77,6"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">mm</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Depth</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.depth_mm ? formData.depth_mm : ""}
                      onChange={(e) =>
                        updateField("depth_mm", Number(e.target.value))
                      }
                      min={0}
                      placeholder="8,25"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">mm</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Weight</TableCell>
                <TableCell>
                  <InputGroup>
                    <InputGroupInput
                      type="number"
                      value={formData.weight_g ? formData.weight_g : ""}
                      onChange={(e) =>
                        updateField("weight_g", Number(e.target.value))
                      }
                      min={0}
                      placeholder="227"
                      disabled={isLoading}
                    />
                    <InputGroupAddon align="inline-end">g</InputGroupAddon>
                  </InputGroup>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4 pt-6">
        <Button
          variant="outline"
          onClick={() => router.back()}
          disabled={isLoading}>
          Cancel
        </Button>

        <Button onClick={handleSubmit} disabled={isLoading}>
          {!isLoading ? "Save Changes" : "Saving..."}
        </Button>
      </div>
    </main>
  );
};

export default ProductEdit;
