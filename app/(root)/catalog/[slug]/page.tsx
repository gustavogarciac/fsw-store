import SectionTitle from "@/components/shared/SectionTitle";
import Product from "@/components/shared/cards/Product";
import { fetchProductByCategory } from "@/lib/actions/products.actions";
import React from "react";

const page = async ({ params }: { params: { slug: string } }) => {
  const products = await fetchProductByCategory({ categorySlug: params.slug });

  if (!products) return null;

  return (
    <div className="my-6">
      <SectionTitle title={params.slug} />

      <div className="grid grid-cols-2 gap-6 mt-6">
        {products.map((product) => (
          <Product
            basePrice={product.basePrice}
            discountPercent={product.discountPercent}
            imageUrls={product.imageUrls}
            name={product.name}
            slug={product.slug}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
