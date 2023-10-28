import { calculateDiscountPrice } from "@/lib/utils";
import { Decimal } from "@prisma/client/runtime/library";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  basePrice: Decimal;
  imageUrls: string[];
  slug: string;
  discountPercent: number;
}

const Product = ({
  name,
  basePrice,
  imageUrls,
  slug,
  discountPercent,
}: Props) => {
  return (
    <Link href={`/product/${slug}`} className="flex flex-col gap-4 w-full">
      <div className="relative p-4 bg-zinc-900 aspect-square flex justify-center items-center rounded-md group">
        <Image
          src={imageUrls[0]}
          alt={`${slug} image`}
          width={150}
          height={150}
        />

        {discountPercent > 0 && (
          <span className="absolute top-3 left-3 flex gap-1 bg-purple-700 px-2 py-1 text-sm font-bold rounded-xl group-hover:-translate-y-1 transition-transform duration-300">
            <Image
              src={"/assets/icons/arrow-down.svg"}
              alt="Discount arrow down"
              width={16}
              height={16}
            />
            {discountPercent}%
          </span>
        )}
      </div>

      <div>
        <h2 className="leading-relaxed hover:underline">{name}</h2>
        <div className="flex gap-2 items-center">
          <span className="font-bold text-2xl">
            $
            {calculateDiscountPrice({
              basePrice,
              discountPercent,
            })}
          </span>
          {discountPercent > 0 && (
            <span className="text-zinc-600 line-through">
              ${basePrice.toString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Product;
