"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  name: string;
}

const ImageGallery = ({ images, name }: Props) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <>
      <div className="w-full aspect-square flex justify-center items-center bg-zinc-800 mt-6 rounded-md">
        <Image src={currentImage} alt={name} width={300} height={300} />
      </div>
      <div className="flex flex-row gap-2">
        {images?.map((imageUrl) => (
          <button
            className="w-full aspect-square flex justify-center items-center bg-zinc-800 mt-3 rounded-md overflow-x-auto hover:border-purple-800  border"
            key={imageUrl.length}
            onClick={() => setCurrentImage(imageUrl)}
          >
            <Image src={imageUrl} alt={name} width={100} height={100} />
          </button>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
