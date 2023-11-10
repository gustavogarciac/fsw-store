"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";
import SectionTitle from "./SectionTitle";
import CartCard from "./cards/CartCard";
import { useCartContext } from "@/contexts/CartContext";

const Cart = () => {
  const { cart, subtotal, total, totalDiscount } = useCartContext();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant={"outline"}>
          <div className="relative">
            <ShoppingCart />
            <span className="bg-purple-800 rounded-full px-1 absolute -top-3 -right-3">
              {cart.length > 0 && cart.length}
            </span>
          </div>
        </Button>
      </SheetTrigger>

      <SheetContent side={"right"} className="flex flex-col justify-between">
        <div className="space-y-6">
          <SectionTitle title="Cart" icon={<ShoppingCart />} />

          {cart.map((product) => (
            <CartCard
              basePrice={product.basePrice}
              discountPercent={product.discountPercent}
              imageUrl={product.imageUrl}
              name={product.name}
              quantity={product.quantity}
              id={product.id}
              key={product.id}
            />
          ))}

          <table className="w-full border-collapse">
            <tr className="border-t">
              <td className="p-2">Subtotal</td>
              <td align="right" className="p-2">
                ${subtotal.toFixed(2)}
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Shipping</td>
              <td align="right" className="p-2">
                FREE
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2">Discount</td>
              <td align="right" className="p-2">
                - ${totalDiscount.toFixed(2)}
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-2 font-bold text-lg">Total</td>
              <td align="right" className="p-2 font-bold text-lg">
                ${total.toFixed(2)}
              </td>
            </tr>
          </table>
        </div>

        <Button className="min-h-[56px]">
          <span className="font-bold text-lg">Checkout</span>
        </Button>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
