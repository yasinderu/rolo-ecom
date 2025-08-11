import { cartItems } from "@/data";

export const calculateTotal = (): number => {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};
