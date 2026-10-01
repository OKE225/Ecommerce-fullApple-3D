"use client";

import { useCart } from "@/context/CartContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Trash2 } from "lucide-react";

const BasketPage = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <main className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your basket</h1>
        <Card>
          <CardContent className="p-6 text-center text-muted-foreground">
            Your basket is empty.
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Your basket</h1>

      <div className="grid gap-4 xl:grid-cols-2">
        {items.map((item) => (
          <Card key={item.product.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0">
                  {item.product.imageUrl ? (
                    <div className="relative w-full h-full overflow-hidden rounded-md">
                      <Image
                        src={item.product.imageUrl}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 80px, 96px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs rounded-md">
                      No image
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        ${item.product.price} per item
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeItem(item.product.id)}
                      className="h-7 w-7 sm:h-8 sm:w-8 shrink-0">
                      <Trash2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </Button>
                  </div>

                  <div className="flex items-center justify-between gap-2 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}>
                        −
                      </Button>
                      <span className="w-6 sm:w-8 text-center text-xs sm:text-sm">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.product.stock}>
                        +
                      </Button>
                    </div>

                    <span className="text-xs sm:text-base font-medium whitespace-nowrap">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Separator />

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="lg:col-span-1 lg:order-2">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery</span>
                <span className="text-green-600">Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="pt-2 space-y-2">
                <Button
                  variant="secondary"
                  onClick={clearCart}
                  className="w-full">
                  Clear cart
                </Button>
                <Button
                  variant="default"
                  className="w-full bg-green-600 hover:bg-green-700">
                  Buy now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default BasketPage;
