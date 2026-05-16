import Image from "next/image"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import Button from "@/components/ui/button"

export interface ProductCardProps {
  title: string
  collection: string
  price: number
  imageSrc?: string
}

export default function ProductCard({
  title,
  collection,
  price,
  imageSrc,
}: ProductCardProps) {
  return (
    <Card className="group hover:border-ring cursor-pointer">
      {/* Product Image */}
      <div className="relative aspect-square w-full bg-secondary overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-secondary" />
        )}
      </div>

      <CardHeader className="pb-1">
        <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
          {collection}
        </p>
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {title}
        </h3>
      </CardHeader>

      <CardContent>
        <p className="font-heading text-lg font-medium text-foreground">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </CardContent>

      <CardFooter>
        <Button
          variant="outline"
          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
