export interface ProductImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface ProductData {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number | string;
  status: "in_stock" | "out_of_stock" | "made_to_order";
  description?: string;
  highlights?: string[];
  images: {
    main: ProductImage;
    gallery: ProductImage[];
    thumbnail: ProductImage;
  };
}

export const PRODUCTS: ProductData[] = [
  {
    id: "prod_001",
    slug: "royal-polki-necklace",
    name: "Royal Polki Necklace",
    category: "High Jewellery",
    price: 245000,
    status: "in_stock",
    description:
      "A regal expression of uncut diamond artistry. Crafted by master artisans in the Mughal tradition.",
    highlights: [
      "Handcrafted Finish",
      "Bengali Heritage Design",
      "Bridal Collection",
      "Uncut Diamond Setting",
    ],
    images: {
      main: {
        url: "/assets/images/products/royal-polki-necklace/main.jpg",
        alt: "Royal Polki Necklace - Main View",
      },
      gallery: [
        {
          url: "/assets/images/products/royal-polki-necklace/gallery-1.jpg",
          alt: "Royal Polki Necklace - Detail 1",
        },
        {
          url: "/assets/images/products/royal-polki-necklace/gallery-2.jpg",
          alt: "Royal Polki Necklace - Detail 2",
        },
      ],
      thumbnail: {
        url: "/assets/images/products/royal-polki-necklace/thumbnail-1.jpg",
        alt: "Royal Polki Necklace - Thumb 1",
      },
    },
  },
  {
    id: "prod_002",
    slug: "classic-diamond-choker",
    name: "Classic Diamond Choker",
    category: "Bridal Collection",
    price: 185000,
    status: "in_stock",
    description:
      "Refined and timeless, this diamond choker is designed for the modern bride.",
    highlights: [
      "Hallmarked 22k Gold",
      "Bridal Collection",
      "Lightweight Wear",
      "Custom Sizing Available",
    ],
    images: {
      main: {
        url: "/assets/images/products/classic-diamond-choker/main.jpg",
        alt: "Classic Diamond Choker - Main View",
      },
      gallery: [
        {
          url: "/assets/images/products/classic-diamond-choker/gallery-1.jpg",
          alt: "Classic Diamond Choker - Detail 1",
        },
        {
          url: "/assets/images/products/classic-diamond-choker/gallery-2.jpg",
          alt: "Classic Diamond Choker - Detail 2",
        },
      ],
      thumbnail: {
        url: "/assets/images/products/classic-diamond-choker/thumbnail-1.jpg",
        alt: "Classic Diamond Choker - Thumb 1",
      },
    },
  },
  {
    id: "prod_003",
    slug: "emerald-drop-earrings",
    name: "Emerald Drop Earrings",
    category: "Statement Pieces",
    price: 125000,
    status: "in_stock",
    description:
      "Vivid Colombian emeralds suspended in hand-engraved 22k gold drops.",
    highlights: [
      "Colombian Emeralds",
      "Hand-Engraved Gold",
      "Statement Collection",
      "Festive & Bridal Wear",
    ],
    images: {
      main: {
        url: "/assets/images/products/emerald-drop-earrings/main.jpg",
        alt: "Emerald Drop Earrings - Main View",
      },
      gallery: [
        {
          url: "/assets/images/products/emerald-drop-earrings/gallery-1.jpg",
          alt: "Emerald Drop Earrings - Detail 1",
        },
        {
          url: "/assets/images/products/emerald-drop-earrings/gallery-2.jpg",
          alt: "Emerald Drop Earrings - Detail 2",
        },
      ],
      thumbnail: {
        url: "/assets/images/products/emerald-drop-earrings/thumbnail-1.jpg",
        alt: "Emerald Drop Earrings - Thumb 1",
      },
    },
  },
];
