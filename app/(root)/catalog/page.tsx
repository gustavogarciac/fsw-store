import SectionTitle from "@/components/shared/SectionTitle";
import CatalogCard from "@/components/shared/cards/CatalogCard";
import { fetchAllCategories } from "@/lib/actions/categories.actions";
import { Grid2X2 } from "lucide-react";
import React from "react";

const Catalog = async () => {
  const categories = await fetchAllCategories();

  return (
    <div className="mb-12 flex flex-col gap-4">
      <SectionTitle title="catálogo" icon={<Grid2X2 />} otherClasses="mt-6" />

      <div className="grid grid-cols-2 gap-6">
        {categories?.map((category) => (
          <CatalogCard
            imageUrl={category.imageUrl}
            name={category.name}
            slug={category.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
