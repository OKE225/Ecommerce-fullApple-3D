import { createClient } from "../supabase/server";

export async function getAllProducts() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      category_id,
      name,
      price,
      stock,
      image_url,
      description,
      year,
      screen_size_inch,
      screen_resolution,
      screen_type,
      cpu,
      ram_gb,
      battery_size,
      charging_wattage,
      height_mm,
      width_mm,
      depth_mm,
      weight_g,
      category:categories (
        id,
        name
      )
    `,
    )
    .order("id");

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(`Failed to get products from database: ${error.message}`);
  }

  console.log("Products from database:", data);

  return data ?? [];
}

export async function getProductsByCategory(categoryName: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      category_id,
      name,
      price,
      stock,
      image_url,
      description,
      year,
      screen_size_inch,
      screen_resolution,
      screen_type,
      cpu,
      ram_gb,
      battery_size,
      charging_wattage,
      height_mm,
      width_mm,
      depth_mm,
      weight_g,
      category:categories!inner (
        id,
        name
      )
    `,
    )
    .eq("categories.name", categoryName)
    .order("id");

  if (error) {
    console.error("Supabase error:", error);
    throw new Error(`Failed to get products from database: ${error.message}`);
  }

  console.log("Products from database:", data);

  return data ?? [];
}
