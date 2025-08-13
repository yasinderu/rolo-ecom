"use client";

import { Product } from "@/types";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FooterProps {
  total?: number;
  previousUrl: string;
  nextUrl: string;
  proceedBtnText: string;
  productDetail?: Product;
  handleNextAction?: () => void;
  disableNextButton?: boolean;
  isCheckout?: boolean;
}

export default function Footer({
  total,
  previousUrl,
  nextUrl,
  proceedBtnText,
  productDetail,
  handleNextAction,
  disableNextButton = false,
  isCheckout = false,
}: FooterProps) {
  const router = useRouter();
  const onNext = () => {
    if (handleNextAction) {
      handleNextAction();
    }
    router.push(nextUrl);
  };
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4 px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <button
          className="px-4 py-2 cursor-pointer text-[#5F5F5F] bg-[#F4F4F4] rounded-[4px] flex items-center space-x-2 hover:bg-gray-200"
          onClick={() => router.push(previousUrl)}
          type="button"
        >
          <ChevronLeft />
          <span>Back</span>
        </button>
        <div className="flex items-center space-x-4">
          {!productDetail && (
            <span className="text-xl font-light text-gray-600">Total</span>
          )}
          <span className="text-3xl font-semibold text-gray-800">
            ${productDetail ? productDetail.price : total}
          </span>
          <button
            className={`px-6 py-2 cursor-pointer ${
              disableNextButton
                ? "bg-[#F4F4F4] text-[#5F5F5F]"
                : "bg-[#748067] text-white hover:bg-green-800"
            } rounded-[4px] flex flex-row gap-2`}
            onClick={isCheckout ? undefined : () => onNext()}
            disabled={disableNextButton}
            type="submit"
          >
            {proceedBtnText}
            <ChevronRight />
          </button>
        </div>
      </div>
    </footer>
  );
}
