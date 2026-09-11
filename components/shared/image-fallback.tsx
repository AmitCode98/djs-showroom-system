import React from "react";
import { ImageBroken } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface ImageFallbackProps {
  className?: string;
  text?: string;
  iconSize?: number;
}

export function ImageFallback({
  className,
  text = "No Image Available",
  iconSize = 24,
}: ImageFallbackProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center w-full h-full bg-[#FDFAF5] border border-[rgba(120,90,40,0.15)] text-[#7B6A58] rounded-none overflow-hidden p-4 text-center",
        className
      )}
    >
      <ImageBroken size={iconSize} weight="light" className="opacity-50 mb-2" />
      {text && (
        <span className="text-sm font-medium tracking-wide uppercase opacity-70">
          {text}
        </span>
      )}
    </div>
  );
}
