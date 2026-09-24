"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateProduct(
  productId: number,
  formData: {
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
  },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("products")
    .update({
      category_id: formData.category_id,
      name: formData.name,
      price: formData.price,
      stock: formData.stock,
      description: formData.description,
      year: formData.year,
      screen_size_inch: formData.screen_size_inch,
      screen_resolution: formData.screen_resolution,
      screen_type: formData.screen_type,
      cpu: formData.cpu,
      ram_gb: formData.ram_gb,
      battery_size: formData.battery_size,
      charging_wattage: formData.charging_wattage,
      height_mm: formData.height_mm,
      width_mm: formData.width_mm,
      depth_mm: formData.depth_mm,
      weight_g: formData.weight_g,
    })
    .eq("id", productId)
    .select();

  if (error) {
    console.error("Error updating product:", error);
    throw error;
  }

  revalidatePath("/dashboard/products");
  revalidatePath(`/dashboard/products/${productId}`);
}
