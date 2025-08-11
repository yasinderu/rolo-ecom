import Header from "@/components/Header";
import { productDetailExe } from "@/data";

export default function ProductDetail() {
  return (
    <div>
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full pb-24 min-h-screen">
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-500 mb-6">
          Machines & Equipment &gt;&gt; Breville
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Image Gallery */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
              <img
                src={productDetailExe.largeImage}
                alt={productDetailExe.name}
                className="w-full h-auto rounded-lg"
                // onError={(e) => {
                //   const target = e.target as HTMLImageElement;
                //   target.src = 'https://placehold.co/800x800/cccccc/000000?text=Image+Not+Found';
                //   console.error('Main image failed to load');
                // }}
              />
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {productDetailExe.thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className="w-20 h-20 bg-white rounded-lg shadow-md p-2 cursor-pointer"
                >
                  <img
                    src={thumb}
                    alt={`${productDetailExe.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-contain rounded"
                    // onError={(e) => {
                    //   const target = e.target as HTMLImageElement;
                    //   target.src = 'https://placehold.co/200x200/cccccc/000000?text=Thumb';
                    //   console.error('Thumbnail failed to load');
                    // }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="lg:w-1/2 flex flex-col overflow-y-auto h-screen">
            <h1 className="text-3xl font-bold tracking-wide mb-1">
              {productDetailExe.name}
            </h1>
            <p className="text-gray-600 mb-4">
              {productDetailExe.shortDescription}
            </p>

            {/* Price section */}
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-normal line-through text-gray-400">
                ${productDetailExe.oldPrice}
              </span>
              <span className="text-3xl font-semibold text-gray-800">
                ${productDetailExe.price}
              </span>
            </div>

            {/* Color options */}
            <div className="mb-6 border-y-2 border-y-[#BABFCE] py-16">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-700">Colour</span>
                <span className="text-gray-500">
                  {productDetailExe.colors[0].name}
                </span>
              </div>
              <div className="flex space-x-2">
                {productDetailExe.colors.map((color, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-sm border-2 border-gray-400 cursor-pointer"
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>

            {/* Long description */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {productDetailExe.longDescription.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {productDetailExe.longDescription.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {productDetailExe.longDescription.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </main>
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
            <span className="text-xl font-semibold text-gray-800">
              ${productDetailExe.price}
            </span>
            <button className="px-6 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
