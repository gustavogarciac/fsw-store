import React from "react";
import { currentUser } from "@clerk/nextjs";
import { prismaClient } from "@/lib/prisma";
import { fetchAllProducts } from "@/lib/actions/products.actions";
import Image from "next/image";
import { categoriesLinks } from "@/constants/categories";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Product from "@/components/shared/cards/Product";

const Home = async () => {
  const user = await currentUser();
  const products = await fetchAllProducts();

  return (
    <div className="flex flex-col gap-4 px-5">
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

      <div className="space-y-2">
        <h1 className="uppercase text-lg font-medium">Mouses</h1>

        <div className="grid grid-cols-2 gap-4 items-center">
          {products
            .filter((product) =>
              product.categoryId.includes(
                "471c5fbf-b829-4341-97bc-fdfbfaaf1435"
              )
            )
            .map((product) => (
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
    </div>
  );
};

export default Home;
