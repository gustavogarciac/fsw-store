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
import ImageGallery from "@/components/shared/ImageGallery";
import ProductInformation from "@/components/shared/ProductInformation";

const Page = async ({ params }: { params: { slug: string } }) => {
  const product = await fetchProductBySlug({
    slug: params.slug,
  });

  const relatedProducts = await fetchRelatedProducts({
    slug: params.slug,
  });

  return (
    <div>
      <ImageGallery images={product?.imageUrls} name={product?.name} />

      <ProductInformation
        basePrice={product?.basePrice.toNumber()}
        description={product?.description}
        discountPercent={product?.discountPercent}
        name={product?.name}
        imageUrl={product?.imageUrls[0]}
        id={product?.id}
      />

      <ProductSlide
        products={relatedProducts}
        title="Related Products"
        containerClasses="mt-12 mb-10"
      />
    </div>
  );
};

export default Page;
