import React from "react";
import { currentUser } from "@clerk/nextjs";
import { prismaClient } from "@/lib/prisma";
import {
  fetchAllProducts,
  fetchAllProductsByCategory,
} from "@/lib/actions/products.actions";
import Image from "next/image";
import { categoriesLinks } from "@/constants/categories";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Product from "@/components/shared/cards/Product";

const Home = async () => {
  const user = await currentUser();
  const products = await fetchAllProductsByCategory();

  return (
    <div className="flex flex-col gap-4 px-5">
      {/* Image Banner */}
      <div className="flex items-center gap-6 justify-center bg-gradient-to-r from-purple-500 to-purple-800 mt-4 rounded-md p-4">
        <h1 className="text-lg max-w-[50%] text-center">
          Up to <strong className="text-4xl font-bold">55% off</strong> this
          month only
        </h1>

        <Image
          src="/pictures/cart.png"
          alt="Basket Icon"
          height={120}
          width={120}
        />
      </div>

      {/* Categories Action */}
      <div className="grid grid-cols-2 gap-4 w-full mt-4">
        {categoriesLinks.map((category) => (
          <Link href={category.route} key={category.label} className="w-full">
            <Button
              className="items-center gap-2 w-full min-h-[56px]"
              variant={"outline"}
            >
              <Image
                src={category.icon}
                alt={`${category.label} icon`}
                height={18}
                width={18}
              />
              <span>{category.label}</span>
            </Button>
          </Link>
        ))}
      </div>

      {/* Product Caroussel */}
      <div className="space-y-2 mt-6">
        <h1 className="uppercase text-lg font-medium">Offers</h1>

        <div className="flex flex-row gap-4 items-start overflow-x-auto pb-2 scrollbar-hide">
          {products?.offers.map((product) => (
            <Product
              name={product.name}
              basePrice={product.basePrice}
              discountPercent={product.discountPercent}
              imageUrls={product.imageUrls}
              slug={product.slug}
              key={product.id}
            />
          ))}
        </div>
      </div>

      {/* Image Banner */}
      <div className="flex items-center gap-6 justify-center bg-gradient-to-r from-zinc-800 to-zinc-600 mt-4 rounded-md p-4">
        <h1 className="text-lg max-w-[50%] text-center">
          Up to <strong className="text-4xl font-bold">55% off</strong> on
          mouses
        </h1>

        <Image
          src="/pictures/mouse.png"
          alt="Basket Icon"
          height={120}
          width={120}
        />
      </div>

      {/* Product Caroussel */}
      <div className="space-y-2 mt-6">
        <h1 className="uppercase text-lg font-medium">Keyboards</h1>

        <div className="flex flex-row gap-4 items-start overflow-x-auto pb-2 scrollbar-hide">
          {products?.keyboards.map((product) => (
            <Product
              name={product.name}
              basePrice={product.basePrice}
              discountPercent={product.discountPercent}
              imageUrls={product.imageUrls}
              slug={product.slug}
              key={product.id}
            />
          ))}
        </div>
      </div>

      {/* Image Banner */}
      <div className="flex flex-row-reverse items-center gap-6 justify-center bg-gradient-to-r from-purple-500 to-purple-800 mt-4 rounded-md p-4">
        <h1 className="text-lg max-w-[50%] text-center">
          Up to <strong className="text-4xl font-bold">20% off</strong> on
          headphones
        </h1>

        <Image
          src="/pictures/jbl-headphone.png"
          alt="Basket Icon"
          height={140}
          width={140}
        />
      </div>

      {/* Product Caroussel */}
      <div className="space-y-2 mt-6">
        <h1 className="uppercase text-lg font-medium">Mouses</h1>

        <div className="flex flex-row gap-4 items-start overflow-x-auto pb-2 scrollbar-hide">
          {products?.mouses.map((product) => (
            <Product
              name={product.name}
              basePrice={product.basePrice}
              discountPercent={product.discountPercent}
              imageUrls={product.imageUrls}
              slug={product.slug}
              key={product.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
