"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageFallback } from "./image-fallback";
import { ImagePlaceholder } from "./image-placeholder";

interface CategoryImageProps {
  src?: string | null;
  alt: string;
  aspectRatio?: "square" | "portrait" | "productCard" | "hero" | "category" | "thumbnail" | "auto";
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export function CategoryImage({
  src,
  alt,
  aspectRatio = "category",
  priority = false,
  fill = true,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: CategoryImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

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
        <ImageFallback text={!src ? "No Category Image" : "Image Error"} />
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
        alt={alt || "Category image"}
        fill={fill}
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-all duration-700 ease-out group-hover:scale-105",
          isLoading ? "scale-110 blur-md" : "scale-100 blur-0"
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
