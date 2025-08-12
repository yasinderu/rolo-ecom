"use client";

import { productThumbnails } from "@/data";
import { Product } from "@/types";
import { useState } from "react";

interface ProductCarouselProps {
  product: Product;
  selectedImage: number;
  handleSelectImage: (index: number) => void;
}

export default function ProductCarousel({
  product,
  handleSelectImage,
  selectedImage,
}: ProductCarouselProps) {
  return (
    <div className="lg:w-1/2 flex flex-col items-center">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
        <img
          src={product.img[selectedImage]}
          alt={product.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {productThumbnails[0].thumbnails.map((thumb, index) => (
          <div
            key={index}
            className={`w-20 h-20 bg-white rounded-lg shadow-md p-2 cursor-pointer ${
              index === selectedImage && "border-1 border-[#375737]"
            }`}
          >
            <img
              onClick={() => handleSelectImage(index)}
              src={thumb}
              alt={`${product.name} thumbnail ${index + 1}`}
              className="w-full h-full object-contain rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
