"use client";

import ProductCard from "@/components/ProductCard";
import { ShopProduct } from "@/types/ProductsTypes";
import { useState, useMemo } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";

type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";

const ProductsGridWithSort = ({ products }: { products: ShopProduct[] }) => {
  const [sort, setSort] = useState<SortOption>("price-desc");

  const sortedProducts = useMemo(() => {
    const arr = [...products];

    switch (sort) {
      case "price-asc":
        return arr.sort((a, b) => a.price - b.price);
      case "price-desc":
        return arr.sort((a, b) => b.price - a.price);
      case "name-asc":
        return arr.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return arr.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return arr;
    }
  }, [products, sort]);

  const sortLabels: Record<SortOption, string> = {
    "price-desc": "Price: High to Low",
    "price-asc": "Price: Low to High",
    "name-desc": "Name: Z to A",
    "name-asc": "Name: A to Z",
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Select value={sort} onValueChange={(v) => setSort(v as SortOption)}>
          <SelectTrigger className="w-50">{sortLabels[sort]}</SelectTrigger>
          <SelectContent>
            <SelectItem value="price-desc">Price: High to Low</SelectItem>
            <SelectItem value="price-asc">Price: Low to High</SelectItem>
            <SelectItem value="name-desc">Name: Z to A</SelectItem>
            <SelectItem value="name-asc">Name: A to Z</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGridWithSort;
