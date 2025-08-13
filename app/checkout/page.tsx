"use client";

import Footer from "@/components/Footer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/lib/validations";
import { useRouter } from "next/navigation";
import Toggle from "@/components/ui/toggle";
import { calculateTotal } from "@/lib/utils";
import { useCart } from "@/contexts/cartContext";

export default function Checkout() {
  const { cart } = useCart();
  const total = calculateTotal(cart);
  const router = useRouter();
  const googleSheetFlag = process.env.NEXT_PUBLIC_GOOGLE_SHEET_FLAG;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  const [isSaveToGoogleSheet, setIsSaveToGoogleSheet] =
    useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const handleToggle = () => {
    setIsSaveToGoogleSheet(!isSaveToGoogleSheet);
  };

  const onSubmit = async (data: FormData) => {
    if (isSaveToGoogleSheet || googleSheetFlag === "true") {
      setIsSubmitting(true);
      setSubmissionStatus(null);

      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (!response.ok) {
          // throw new Error(result.error || "Something went wrong");

          setSubmissionStatus({
            message: result.error,
            isError: true,
          });
        }

        setSubmissionStatus({
          message: "Success! Your information has been saved.",
          isError: false,
        });
        reset();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setSubmissionStatus({
          message: `Error: ${error.message}`,
          isError: true,
        });
      } finally {
        setIsSubmitting(false);
        router.push("/payment");
      }
    }

    router.push("/payment");
  };

  return (
    <div className="min-h-screen p-8 flex flex-col">
      <main className="flex-grow max-w-2xl mx-auto w-full bg-white p-8">
        <div className="flex items-center justify-between mb-6 pb-4">
          <h1 className="text-2xl font-bold tracking-wide">Your Details</h1>
          {/* Below toggle is a helper element to use google sheet for saving the customer data. Uncomment it if you want to use it. */}
          {/* <Toggle isOn={isSaveToGoogleSheet} handleToggle={handleToggle} /> */}
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-6 border-b border-gray-200 pb-8">
            <div className="flex-1">
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="streetAddress" className="block text-gray-700 mb-1">
              Street Address
            </label>
            <input
              type="text"
              id="streetAddress"
              {...register("streetAddress")}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            {errors.streetAddress && (
              <p className="text-red-600 text-sm mt-1">
                {errors.streetAddress.message}
              </p>
            )}
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="houseNumber" className="block text-gray-700 mb-1">
                Unit / House Number{" "}
                <span className="text-gray-400 text-sm">Optional</span>
              </label>
              <input
                type="text"
                id="houseNumber"
                {...register("houseNumber")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="postalCode" className="block text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                {...register("postalCode")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>
          <Footer
            nextUrl="/payment"
            previousUrl="/cart"
            proceedBtnText="Make payment"
            total={total}
            disableNextButton={!isValid || isSubmitting}
            isCheckout={true}
          />
        </form>
      </main>
    </div>
  );
}
