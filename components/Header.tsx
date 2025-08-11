"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto py-8">
      <div className="text-2xl font-bold tracking-widest text-gray-800">
        ROLO
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          />
          {/* Using a simple SVG for the search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200">
          Filters
        </button>
        <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
          Your Cart
        </button>
      </div>
    </header>
  );
}
