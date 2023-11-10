"use client";

import { Button } from "@/components/ui/button";
import { useCartContext } from "@/contexts/CartContext";
import { calculateDiscountPrice } from "@/lib/utils";
import { ChevronLeft, ChevronRight, TrashIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  basePrice: number;
  discountPercent: number;
  quantity: number;
  imageUrl: string;
  id: string;
}

const CartCard = ({
  basePrice,
  discountPercent,
  imageUrl,
  name,
  quantity,
  id,
}: Props) => {
  const { removeProductFromCart, increaseQuantity, decreaseQuantity } =
    useCartContext();

  return (
    <div className="flex gap-2 justify-between items-center">
      <Image
        src={imageUrl}
        alt={name}
        width={100}
        height={100}
        className="rounded-lg bg-zinc-800 aspect-square object-contain"
      />

      <div className="flex flex-col items-start">
        <h2 className="text-sm leading-relaxed line-clamp-1">{name}</h2>
        <div className="flex items-center gap-1">
          <span className="font-bold text-lg">
            ${calculateDiscountPrice({ basePrice, discountPercent })}
          </span>
          <span className="line-through text-zinc-50/40 text-sm">
            ${basePrice}
          </span>
        </div>
        <div className="flex gap-2 mt-2 items-center">
          <Button
            variant={"outline"}
            className="w-fit p-1 h-fit"
            onClick={() => decreaseQuantity(id)}
          >
            <ChevronLeft width={15} height={15} />
          </Button>
          <span className="w-4 font-bold">{quantity}</span>
          <Button
            variant={"outline"}
            className="w-fit p-1 h-fit"
            onClick={() => increaseQuantity(id)}
          >
            <ChevronRight width={15} height={15} />
          </Button>
        </div>
      </div>

      <Button
        variant={"outline"}
        onClick={() => removeProductFromCart(id)}
        className="w-fit h-fit px-2 py-1"
      >
        <TrashIcon width={20} height={20} />
      </Button>
    </div>
  );
};

export default CartCard;
