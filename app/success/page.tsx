import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-green-500">
        Payment Successful! 🚀
      </h1>
      <p className="mt-4">Thank you for your purchase.</p>
      <Link href="/" className="mt-8 text-blue-500 hover:underline">
        Return to Home
      </Link>
    </div>
  );
}
