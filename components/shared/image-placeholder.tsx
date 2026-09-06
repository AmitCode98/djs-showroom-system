import React from "react";
import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  className?: string;
  isAdmin?: boolean;
  text?: string;
}

export function ImagePlaceholder({
  className,
  isAdmin = false,
  text = "Click to upload image",
}: ImagePlaceholderProps) {
  if (isAdmin) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center w-full h-full min-h-[120px] bg-[#FDFAF5] border-2 border-dashed border-[rgba(120,90,40,0.3)] hover:border-[rgba(120,90,40,0.6)] text-[#7B6A58] rounded-none overflow-hidden p-4 text-center cursor-pointer transition-colors duration-250",
          className
        )}
      >
        <CloudArrowUp size={32} weight="light" className="opacity-60 mb-3 text-[#D4AF37]" />
        <span className="text-sm font-medium tracking-wide">
          {text}
        </span>
      </div>
    );
  }

  // General Loading Skeleton
  return (
    <div
      className={cn(
        "w-full h-full bg-[#F8F5F0] animate-pulse rounded-none",
        className
      )}
    />
  );
}
