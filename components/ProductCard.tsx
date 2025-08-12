"use client";

import { products } from "@/data";
import { useRouter } from "next/navigation";

export default function ProductCard({
  product,
}: {
  product: (typeof products)[0];
}) {
  const router = useRouter();

  function openProductDetailPage(id: number) {
    router.push(`/product/${id}`);
  }

  return (
    <div
      className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition duration-200 hover:scale-120 cursor-pointer"
      onClick={() => openProductDetailPage(product.id)}
    >
      <div className="relative w-full h-64">
        <img
          src={product.img[0]}
          alt={product.name}
          className="object-contain w-full h-full rounded-lg"
          // onError={(e) => {
          //   const target = e.target as HTMLImageElement;
          //   target.src =
          //     "https://placehold.co/400x400/cccccc/000000?text=Image+Not+Found";
          //   console.error("Image failed to load");
          // }}
        />
      </div>
      <div className="w-full text-left mt-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg mb-1">{product.name}</h3>
          <h3 className="font-bold text-lg mb-1">${product.price}</h3>
        </div>
        <p className="text-gray-600 text-sm">{product.shortDesc}</p>
      </div>
    </div>
  );
}
