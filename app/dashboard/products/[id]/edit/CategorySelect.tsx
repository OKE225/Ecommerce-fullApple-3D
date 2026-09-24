"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Category {
  id: number;
  name: string;
}

interface CategorySelectProps {
  categories: Category[];
  productCategoryId: number;
  onCategoryChange: (categoryID: number) => void;
  isLoading: boolean;
}
export function CategorySelect({
  categories,
  productCategoryId,
  onCategoryChange,
  isLoading,
}: CategorySelectProps) {
  const categoryItems = categories.map((category) => ({
    value: String(category.id),
    label: category.name,
  }));

  return (
    <>
      <Select
        items={categoryItems}
        defaultValue={String(productCategoryId)}
        onValueChange={(value) => onCategoryChange(Number(value))}
        disabled={isLoading}>
        <SelectTrigger id="select-category" className="w-full">
          <SelectValue placeholder="Choose a category" />
        </SelectTrigger>

        <SelectContent>
          {categories.map((category) => (
            <SelectItem key={category.id} value={String(category.id)}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}
