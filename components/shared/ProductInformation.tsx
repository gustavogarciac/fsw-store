"use client";

import { calculateDiscountPrice } from "@/lib/utils";
import { ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useCartContext } from "@/contexts/CartContext";

interface Props {
  name: string;
  description: string;
  basePrice: number;
  discountPercent: number;
  imageUrl: string;
  id: string;
}

const ProductInformation = ({
  basePrice,
  description,
  discountPercent,
  name,
  imageUrl,
  id,
}: Props) => {
  const [quantity, setQuantity] = useState(1);
  const { addProductToCart } = useCartContext();

  function handleQuantityChange(sum: boolean) {
    if (sum) {
      if (quantity < 100) {
        setQuantity(quantity + 1);
      }
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  }

  return (
    <>
      {/* Product Title */}
      <div className="mt-6">
        <small className="text-sm text-zinc-300/60">New | 100 sells</small>

        <h1 className="text-xl font-medium leading-relaxed">{name}</h1>

        <span className="text-purple-600 text-sm">Available in stock</span>
      </div>

      {/* Product Price */}
      <div className="mt-6">
        <div className="flex gap-3 items-center">
          <h2 className="text-4xl font-bold">
            $
            {calculateDiscountPrice({
              basePrice: basePrice,
              discountPercent: discountPercent,
            })}
          </h2>

          <span className="flex flex-row gap-1 bg-purple-800 rounded-3xl px-2 py-1 text-sm items-center font-bold">
            <ArrowDown width={20} height={20} />
            {discountPercent}%
          </span>
        </div>

        <span className="text-lg text-gray-500">
          From:{" "}
          <strong className="line-through font-normal">
            ${basePrice.toString()}
          </strong>
        </span>
      </div>

      <div className="flex gap-4 items-center mt-6">
        <Button
          variant={"outline"}
          className="w-fit px-2 py-1"
          onClick={() => handleQuantityChange(false)}
        >
          <ChevronLeft width={25} height={25} />
        </Button>
        <span className="w-4 font-bold">{quantity}</span>
        <Button
          variant={"outline"}
          className="w-fit px-2 py-1"
          onClick={() => handleQuantityChange(true)}
        >
          <ChevronRight width={25} height={25} />
        </Button>
      </div>

      {/* Product Description */}
      <div className="mt-8 space-y-2">
        <h2 className="font-bold text-xl">Description</h2>
        <p className="text-zinc-400 leading-relaxed text-md">{description}</p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <Button
          onClick={() =>
            addProductToCart({
              basePrice,
              discountPercent,
              imageUrl,
              name,
              quantity,
              id,
            })
          }
          className="w-full bg-purple-700 hover:bg-purple-800 min-h-[56px] uppercase text-lg font-bold"
        >
          Add to Cart
        </Button>

        <div className="flex justify-between items-center w-full p-4 rounded-md bg-zinc-800 mt-4">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={"/assets/icons/box.svg"}
              alt="box"
              width={30}
              height={30}
            />
            <div className="flex flex-col gap-1">
              <span>
                Delivery through <strong>FSPacket®</strong>
              </span>
              <span className="text-purple-600 text-sm">
                Shipping throughout Brazil
              </span>
            </div>
          </div>

          <span className="font-bold">Free Shipping</span>
        </div>
      </div>
    </>
  );
};

export default ProductInformation;
