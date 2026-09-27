export default function cropToSquare(file: File): Promise<Blob> {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = Math.min(img.width, img.height);
      canvas.width = size;
      canvas.height = size;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const startX = (img.width - size) / 2;
      const startY = (img.height - size) / 2;

      ctx.drawImage(img, startX, startY, size, size, 0, 0, size, size);

      const mimeType = file.type === "image/png" ? "image/png" : "image/jpeg";
      const quality = mimeType === "image/jpeg" ? 0.9 : undefined;

      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
        },
        mimeType,
        quality,
      );
    };
  });
}
