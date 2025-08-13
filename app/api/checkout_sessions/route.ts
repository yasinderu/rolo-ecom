import { NextResponse, NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";
import { CartItem } from "@/types";

export async function POST(req: NextRequest) {
  try {
    const { lineItems } = await req.json();

    if (!lineItems) {
      return NextResponse.json({ error: "Missing item" }, { status: 400 });
    }
    const successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`;

    const line_items = lineItems.map((item: CartItem) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      };
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: line_items,
      mode: "payment",
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ id: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
