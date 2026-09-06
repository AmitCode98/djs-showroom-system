"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageFallback } from "./image-fallback";
import { ImagePlaceholder } from "./image-placeholder";

interface ProductImageProps {
  src?: string | null;
  alt: string;
  aspectRatio?: "square" | "portrait" | "productCard" | "hero" | "category" | "thumbnail" | "auto";
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
  width?: number;
  height?: number;
}

export function ProductImage({
  src,
  alt,
  aspectRatio = "square",
  priority = false,
  fill = true,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  width,
  height,
}: ProductImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Aspect ratio classes matching UI_CONSTANTS.aspectRatios logically
  const aspectRatioClasses = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    productCard: "aspect-[4/5]",
    hero: "aspect-video md:aspect-[16/9]",
    category: "aspect-[4/3]",
    thumbnail: "aspect-square",
    auto: "aspect-auto",
  };

  const containerClasses = cn(
    "relative overflow-hidden rounded-none bg-[#F8F5F0]",
    aspectRatioClasses[aspectRatio],
    className
  );

  if (!src || hasError) {
    return (
      <div className={containerClasses}>
        <ImageFallback text={!src ? "No Image" : "Image Error"} />
      </div>
    );
  }

  return (
    <div className={containerClasses}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <ImagePlaceholder />
        </div>
      )}
      <Image
        src={src}
        alt={alt || "Product image"}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-all duration-500",
          isLoading ? "scale-105 blur-sm" : "scale-100 blur-0"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setHasError(true);
        }}
      />
    </div>
  );
}
