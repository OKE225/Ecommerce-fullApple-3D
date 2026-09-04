export interface ShopProduct {
  id: number;
  category_id: number;
  name: string;
  price: number;
  stock: number;
  image_url: string | null;
  imageUrl: string | null;
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
  category: {
    id: number;
    name: string;
  };
}
