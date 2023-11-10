"use client";

import { calculateDiscountPrice } from "@/lib/utils";
import { createContext, useContext, useMemo, useState } from "react";

interface CartProduct {
  name: string;
  basePrice: number;
  discountPercent: number;
  quantity: number;
  imageUrl: string;
  id: string;
}

interface CartContextProps {
  cart: CartProduct[];
  addProductToCart: ({
    name,
    basePrice,
    discountPercent,
    quantity,
    imageUrl,
  }: CartProduct) => void;
  removeProductFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  total: number;
  subtotal: number;
  totalDiscount: number;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const subtotal = useMemo(() => {
    return cart.reduce((acc, curr) => {
      return acc + curr.basePrice * curr.quantity;
    }, 0);
  }, [cart]);

  const total = useMemo(() => {
    return cart.reduce((acc, curr) => {
      const discountPrice = calculateDiscountPrice({
        basePrice: curr.basePrice,
        discountPercent: curr.discountPercent,
      });
      return acc + discountPrice * curr.quantity;
    }, 0);
  }, [cart]);

  const totalDiscount = subtotal - total;

  function addProductToCart({
    name,
    basePrice,
    discountPercent,
    quantity,
    imageUrl,
    id,
  }: CartProduct) {
    if (quantity === 0) {
      return;
    }

    const productAlreadyInCart = cart.find((product) => product.id === id);
    if (productAlreadyInCart) {
      setCart((prev) =>
        prev.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              quantity: product.quantity + quantity,
            };
          }
          return product;
        })
      );

      return;
    }

    const newCartProduct = {
      name,
      basePrice,
      discountPercent,
      quantity,
      imageUrl,
      id,
    };
    setCart((prev) => [...prev, newCartProduct]);
  }

  function removeProductFromCart(id: string) {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  }

  function increaseQuantity(id: string) {
    setCart((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  }

  function decreaseQuantity(id: string) {
    setCart((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }

        return cartProduct;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        total,
        subtotal,
        totalDiscount,
        removeProductFromCart,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
