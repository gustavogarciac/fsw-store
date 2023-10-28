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
  basePrice: Decimal;
  discountPercent: number;
}) {
  const priceWithDiscount =
    basePrice.toNumber() - basePrice.toNumber() * (discountPercent / 100);

  return priceWithDiscount;
}
