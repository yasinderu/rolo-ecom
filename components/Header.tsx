"use client";
import { useCart } from "@/contexts/cartContext";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  handleProductSearch?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
}

export default function Header({
  handleProductSearch,
  searchValue,
}: HeaderProps) {
  const { cart } = useCart();
  const router = useRouter();
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto py-8">
      <div className="text-2xl font-bold tracking-widest text-gray-800">
        ROLO
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            onChange={handleProductSearch && handleProductSearch}
            value={searchValue && searchValue}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-[4px] focus:outline-none"
          />
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        <button
          className="px-10 py-2 text-[#BABFCE] bg-[#F0F0F0] rounded-[4px]"
          disabled
        >
          Filters
        </button>
        <button
          onClick={() => router.push("/cart")}
          className={`px-10 py-2 cursor-pointer ${
            !!cart.length
              ? "bg-[#375737] text-white hover:bg-green-800"
              : "bg-[#F0F0F0] text-[#5F5F5F] hover:bg-gray-300"
          } rounded-[4px] transition-colors duration-200`}
        >
          Your Cart
        </button>
      </div>
    </header>
  );
}
