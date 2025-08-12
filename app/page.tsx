"use client";

import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data";
import { useMemo, useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;

    const loweredQuery = searchQuery.toLowerCase();

    return products.filter((p) => p.name.toLowerCase().includes(loweredQuery));
  }, [searchQuery]);

  const handleProductSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Header
        handleProductSearch={handleProductSearch}
        searchValue={searchQuery}
      />
      <main className="max-w-7xl mx-auto min-h-screen">
        <h2 className="text-3xl font-light tracking-wide mb-8">Breville</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}
