"use client";

import { useCart } from "@/contexts/cartContext";

export default function CartItems() {
  const { cart } = useCart();
  return (
    <div className="space-y-6">
      {cart.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center py-4 border-b border-[#BABFCE] last:border-b-0"
        >
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={item.img[0]}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg">{item.name}</span>
              <span className="text-gray-500 text-sm">
                {item.colors[0].name}
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-semibold text-gray-800">
              ${item.price}
            </span>
            <span className="text-gray-500 text-sm">
              {item.quantity} unit{item.quantity > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
