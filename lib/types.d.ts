import { Decimal } from "@prisma/client/runtime/library";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: Decimal;
  imageUrls: string[];
  categoryId: string;
  discountPercent: number;
}
