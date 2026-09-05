"use client";

import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { ShopProduct } from "@/types/ProductsTypes";
import { useCart } from "@/context/CartContext";

const AddToCartButton = ({ product }: { product: ShopProduct }) => {
  const { items, addItem } = useCart();

  const cartItem = items.find((item) => item.product.id === product.id);
  const quantityInCart = cartItem?.quantity ?? 0;
  const canAddMore = product.stock > 0 && quantityInCart < product.stock;

  return (
    <Button
      type="button"
      className="w-full mt-3"
      disabled={!canAddMore}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        if (canAddMore) {
          addItem(product, 1);
        }
      }}>
      <ShoppingBag className="h-4 w-4" />
      {canAddMore
        ? quantityInCart > 0
          ? "Add more"
          : "Add to cart"
        : "Out of stock"}
    </Button>
  );
};

export default AddToCartButton;
