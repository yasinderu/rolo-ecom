import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto min-h-screen">
        {/* Section Title */}
        <h2 className="text-3xl font-light tracking-wide mb-8">Breville</h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Large Price Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={`price-${product.id}`} className="flex justify-end pr-8">
              <span className="text-2xl font-normal text-gray-800">
                ${product.largePrice}
              </span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
