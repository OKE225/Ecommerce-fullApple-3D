"use client";

import { CircleX, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import Image from "next/image";
import cropToSquare from "@/lib/cropToSquare";

interface Props {
  productImage?: string | null;
  onFileChange?: (file: File | null) => void;
}

const ImageUpload = ({ productImage, onFileChange }: Props) => {
  const [preview, setPreview] = useState<string | null>(productImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== "image/png" && file.type !== "image/jpeg") {
      alert("Please select a PNG or JPEG image file");
      return;
    }

    const croppedBlob = await cropToSquare(file);
    const croppedFile = new File([croppedBlob], file.name, {
      type: file.type,
    });

    const previewUrl = URL.createObjectURL(croppedFile);
    setPreview(previewUrl);

    onFileChange?.(croppedFile);
  };

  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    onFileChange?.(null);
  };

  return (
    <div className="flex flex-col gap-5">
      {!preview ? (
        <div className="relative w-full aspect-square flex flex-col items-center justify-center text-muted-foreground rounded-xl border-2 border-dashed border-muted-foreground/20">
          <Upload className="h-8 w-8 mb-2" />
          <span className="text-sm">No image</span>
        </div>
      ) : (
        <div className="relative w-full aspect-square">
          <Image
            src={preview}
            alt="product image"
            className="object-cover rounded-xl border-2 border-dashed border-muted-foreground/20"
            fill
          />
          <Button
            size="icon"
            variant="destructive"
            className="absolute right-2.5 top-2.5 border border-destructive"
            onClick={handleRemove}>
            <CircleX />
          </Button>
        </div>
      )}

      <Button
        variant="outline"
        className="w-full"
        onClick={() => fileInputRef.current?.click()}>
        <Upload />
        {!preview ? "Upload Image" : "Change Image"}
      </Button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default ImageUpload;
