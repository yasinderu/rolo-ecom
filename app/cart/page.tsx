"use client";

import CartItems from "@/components/cart/CartItems";
import Footer from "@/components/Footer";
import { CartProvider, useCart } from "@/contexts/cartContext";
import { cartItems } from "@/data";
import { calculateTotal } from "@/lib/utils";

export default function Cart() {
  const { cart } = useCart();
  const totalPrice = calculateTotal(cart);
  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* Main content area for the cart */}
      <main className="flex-grow max-w-2xl mx-auto w-full bg-white rounded-xl p-8">
        <div className="flex justify-between items-center mb-6 pb-4">
          <h1 className="text-2xl font-bold tracking-wide">Your Cart</h1>
          <span className="text-xl text-gray-400">{cart.length} items</span>
        </div>

        <CartItems />
      </main>

      <Footer
        previousUrl="/"
        nextUrl="/checkout"
        proceedBtnText="Checkout"
        total={totalPrice}
      />
    </div>
  );
}
