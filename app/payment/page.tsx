import { order } from "@/data";

export default function Payment() {
  return (
    <div className="min-h-screen p-8 flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-4xl mx-auto w-full bg-white">
        {/* Left Section: Order Summary */}
        <div className="lg:w-1/2 p-8 flex flex-col">
          <div className="flex items-center space-x-3 mb-8">
            {/* SVG for the coffee cup icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 12v3.75m-6.75-6-7.5-3.75a3.375 3.375 0 0 1 0 6h7.5m-7.5 3.75L12 15m-6.75-3.75L6 12m2.25 0 2.25 2.25m0-4.5L10.5 12m2.25 2.25 2.25-2.25m-4.5 0v4.5m4.5-4.5v4.5m0-13.5l-3.75-3.75m3.75 3.75L12 21m-6.75-10.5h1.5"
              />
            </svg>
            <span className="font-semibold text-lg text-gray-800">
              {order.name}
            </span>
          </div>

          <h2 className="text-xl font-bold mb-1">Pay {order.name}</h2>
          <span className="text-3xl font-bold text-gray-800 mb-6">
            {order.currency} {order.price.toFixed(2)}
          </span>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-gray-600 border-b border-gray-200 pb-2">
              <span>{order.product}</span>
              <span>
                {order.currency} {order.price.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center text-gray-600 border-b border-gray-200 pb-2">
              <span>Subtotal</span>
              <span>
                {order.currency} {order.subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold">
                Add promotion code
              </button>
            </div>
            <div className="flex justify-between items-center font-bold text-lg text-gray-800 mt-4">
              <span>Total due</span>
              <span>
                {order.currency} {order.total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Payment Form */}
        <div className="lg:w-1/2 p-8">
          <h2 className="text-xl font-bold mb-6">Pay with PayNow</h2>

          <div className="space-y-4 mb-8">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              Payment method
            </h3>
            <div className="border border-gray-300 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-bold text-purple-600">PAYNOW</span>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                PayNow is supported by bank apps and payment apps such as DBS,
                POSB, OCBC, UOB and GrabPay.
              </p>
              <div className="flex items-center space-x-3 text-gray-500 text-sm">
                {/* SVG for the QR code icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 4.5h16.5a.75.75 0 0 0 .75-.75V2.25a.75.75 0 0 0-.75-.75H3.75a.75.75 0 0 0-.75.75V3.75a.75.75 0 0 0 .75.75ZM3.75 6.75h16.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75ZM3.75 12h16.5a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-3.75a.75.75 0 0 1 .75-.75ZM3.75 18h16.5a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75Z"
                  />
                </svg>
                <span>
                  You will be shown a QR code to scan using your preferred
                  banking or payment app
                </span>
              </div>
            </div>
          </div>

          <button className="w-full px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold mb-4">
            Pay
          </button>
          <div className="flex justify-center space-x-2 text-gray-400 text-xs">
            <span>
              Powered by{" "}
              <span className="font-semibold text-gray-500">stripe</span>
            </span>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
