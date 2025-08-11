export default function Checkout() {
  const total = 2592;
  return (
    <div className="min-h-screen p-8 flex flex-col">
      {/* Main content area for the form */}
      <main className="flex-grow max-w-2xl mx-auto w-full bg-white p-8">
        <h1 className="text-2xl font-bold tracking-wide mb-6 border-b border-gray-200 pb-4">
          Your Details
        </h1>

        {/* The form structure */}
        <form className="space-y-6">
          {/* Name and Email section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="your-name" className="block text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="your-name"
                name="your-name"
                defaultValue="James Hoffman"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue="james@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>

          {/* Street Address section */}
          <div>
            <label
              htmlFor="street-address"
              className="block text-gray-700 mb-1"
            >
              Street Address
            </label>
            <input
              type="text"
              id="street-address"
              name="street-address"
              defaultValue="1 Sesame Street, Big Bird Building"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
          </div>

          {/* Unit and Postal Code section */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="unit-number" className="block text-gray-700 mb-1">
                Unit / House Number{" "}
                <span className="text-gray-400 text-sm">Optional</span>
              </label>
              <input
                type="text"
                id="unit-number"
                name="unit-number"
                defaultValue="#12-34"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="postal-code" className="block text-gray-700 mb-1">
                Postal Code
              </label>
              <input
                type="text"
                id="postal-code"
                name="postal-code"
                defaultValue="12345"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              />
            </div>
          </div>
        </form>
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
              ${total}
            </span>
            <button className="px-6 py-2 text-white bg-green-600 rounded-full hover:bg-green-700 transition-colors duration-200">
              Make Payment
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
