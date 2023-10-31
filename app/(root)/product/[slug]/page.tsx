import {
  fetchProductBySlug,
  fetchRelatedProducts,
} from "@/lib/actions/products.actions";
import React from "react";
import Image from "next/image";
import { calculateDiscountPrice } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductSlide from "@/components/shared/ProductSlide";

const Page = async ({ params }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug({
    slug: params.slug,
  });

  const relatedProducts = await fetchRelatedProducts({
    slug: params.slug,
  });

  return (
    <div>
      {/* TODO: TOGGLE BETWEEN IMAGES */}
      {/* Main Image */}
      <div className="w-full aspect-square flex justify-center items-center bg-zinc-800 mt-6 rounded-md">
        <Image
          src={product?.imageUrls[0]}
          alt={product?.name}
          width={300}
          height={300}
        />
      </div>

      {/* Image Gallery */}
      <div className="flex flex-row gap-2">
        {product?.imageUrls.map((imageUrl) => (
          <div
            className="w-full aspect-square flex justify-center items-center bg-zinc-800 mt-3 rounded-md overflow-x-auto hover:border-purple-800  border"
            key={imageUrl.length}
          >
            <Image
              src={imageUrl}
              alt={product?.name}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>

      {/* Product Title */}
      <div className="mt-6">
        <small className="text-sm text-zinc-300/60">New | 100 sells</small>

        <h1 className="text-xl font-medium leading-relaxed">{product.name}</h1>

        <span className="text-purple-600 text-sm">Available in stock</span>
      </div>

      {/* Product Price */}
      <div className="mt-6">
        <div className="flex gap-3 items-center">
          <h2 className="text-4xl font-bold">
            $
            {calculateDiscountPrice({
              basePrice: product.basePrice,
              discountPercent: product.discountPercent,
            })}
          </h2>

          <span className="flex flex-row gap-1 bg-purple-800 rounded-3xl px-2 py-1 text-sm items-center font-bold">
            <ArrowDown width={20} height={20} />
            {product.discountPercent}%
          </span>
        </div>

        <span className="text-lg text-gray-500">
          From:{" "}
          <strong className="line-through font-normal">
            ${product.basePrice.toString()}
          </strong>
        </span>
      </div>

      <div className="mt-8 space-y-2">
        <h2 className="font-bold text-xl">Description</h2>
        <p className="text-zinc-400 leading-relaxed text-md">
          {product?.description}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <Button className="w-full bg-purple-700 hover:bg-purple-800 min-h-[56px] uppercase text-lg font-bold">
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

      {/* Recommended Products */}
      <ProductSlide
        products={relatedProducts}
        title="Related Products"
        containerClasses="mt-12 mb-10"
      />
    </div>
  );
};

export default Page;
