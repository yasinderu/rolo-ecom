"use client";

import { useCart } from "@/contexts/cartContext";
import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

export default function PayButton() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    try {
      const stripe = await getStripe();
      if (!stripe) {
        throw new Error("Stripe.js has not loaded yet.");
      }

      const lineItems = [...cart];

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems: lineItems }),
      });

      if (!res.ok) {
        throw new Error("Failed to create checkout session.");
      }

      const session = await res.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        alert(result.error.message);
      }
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  return (
    <button
      className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold mb-4"
      onClick={handleCheckout}
    >
      Pay
    </button>
  );
}
