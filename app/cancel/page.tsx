import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-500">Payment Canceled</h1>
      <p className="mt-4">Your order was not processed.</p>
      <Link href="/" className="mt-8 text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
