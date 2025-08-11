import { cartItems } from "@/data";
import { calculateTotal } from "@/lib/utils";

export default function Cart() {
  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* Main content area for the cart */}
      <main className="flex-grow max-w-2xl mx-auto w-full bg-white rounded-xl p-8">
        <div className="flex justify-between items-center mb-6 pb-4">
          <h1 className="text-2xl font-bold tracking-wide">Your Cart</h1>
          <span className="text-xl text-gray-400">
            {cartItems.length} items
          </span>
        </div>

        {/* List of cart items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-[#BABFCE] last:border-b-0"
            >
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg">{item.name}</span>
                  <span className="text-gray-500 text-sm">{item.color}</span>
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
      </main>

      {/* Sticky Bottom Bar for back button and total */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-lg py-4 px-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200 flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back</span>
          </button>
          <div className="flex items-center space-x-4">
            <span className="text-xl font-light text-gray-600">Total</span>
            <span className="text-3xl font-semibold text-gray-800">
              ${calculateTotal()}
            </span>
            <button className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-200">
              Check Out
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
