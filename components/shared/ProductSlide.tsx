import { Decimal } from "@prisma/client/runtime/library";
import React from "react";
import Product from "./cards/Product";

interface ProductProps {
  id: string;
  name: string;
  basePrice: Decimal;
  imageUrls: string[];
  slug: string;
  discountPercent: number;
}

interface Props {
  products: ProductProps[];
  title: string;
  containerClasses?: string;
}

const ProductSlide = ({ products, title, containerClasses }: Props) => {
  return (
    <div className={`space-y-2 mt-6 ${containerClasses}`}>
      <h1 className="uppercase text-lg font-medium">{title}</h1>

      <div className="flex flex-row gap-4 items-start overflow-x-auto pb-2 scrollbar-hide">
        {products?.map((product) => (
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
  );
};

export default ProductSlide;
