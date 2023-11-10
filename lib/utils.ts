import { Decimal } from "@prisma/client/runtime/library";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateDiscountPrice({
  basePrice,
  discountPercent,
}: {
  basePrice: number;
  discountPercent: number;
}) {
  const priceWithDiscount = basePrice - basePrice * (discountPercent / 100);

  return priceWithDiscount;
}
