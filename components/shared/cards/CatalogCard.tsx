import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  name: string;
  slug: string;
  imageUrl: string;
}

const CatalogCard = ({ name, slug, imageUrl }: Props) => {
  return (
    <Link
      href={`/catalog/${slug}`}
      className="rounded-md overflow-hidden group"
    >
      <div className="bg-gradient-to-br from-purple-600 to-purple-900 p-4 aspect-square flex justify-center items-center rounded-md">
        <Image
          src={imageUrl}
          alt={`${name} Category`}
          width={140}
          height={140}
          className="group-hover:-translate-y-3 transition-transform duration-300"
        />
      </div>
      <div className="flex justify-center p-4 bg-zinc-900">
        <span className="font-bold">{name}</span>
      </div>
    </Link>
  );
};

export default CatalogCard;
