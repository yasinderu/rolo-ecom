import { Product } from "@/types";

interface ProductDetailProps {
  product: Product;
  selectedColor: string;
  handleColorChange: (color: string) => void;
}

export default function ProductDetail({
  product,
  selectedColor,
  handleColorChange,
}: ProductDetailProps) {
  return (
    <div className="lg:w-[60%] flex flex-col overflow-y-auto h-screen">
      <div className="text-sm text-gray-500 mb-6">
        Machines & Equipment &gt;&gt; Breville
      </div>
      <h1 className="text-3xl font-bold tracking-wide mb-1">{product.name}</h1>
      <p className="text-[#5F5F5F] mb-4">{product.shortDesc}</p>
      <div className="flex items-center space-x-2 mb-6">
        {!!product.oldPrice && (
          <span className="text-xl font-normal line-through text-gray-400">
            ${product.oldPrice}
          </span>
        )}
        <span className="text-3xl font-semibold text-gray-800">
          ${product.price}
        </span>
      </div>
      <div className="border-y-1 border-y-[#BABFCE] py-12">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-700">Colour</span>
          <span className="text-gray-500">{product.colors[0].name}</span>
        </div>
        <div className="flex space-x-2">
          {product.colors.map((color, index) => (
            <div
              key={index}
              className={`w-8 h-8 p-2 rounded-sm cursor-pointer ${
                selectedColor === color.value && "border-2 border-gray-300"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
              onClick={() => handleColorChange(color.value)}
            ></div>
          ))}
        </div>
      </div>
      <div className="space-y-4 text-[14px] font-[300] text-[#5F5F5F] leading-relaxed py-8">
        {product?.longDesc?.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
      <div className="space-y-4 text-[##5F5F5F] leading-relaxed py-8 border-t-1 border-t-[#BABFCE]">
        <h2 className="text-[16px] font-[500] mb-2">What&apos;s in the box</h2>
        <p className="text-[#5F5F5F] text-[14px] mb-2">
          On top of the machine itself, this comes with:
        </p>
        <ul className="list-disc list-inside space-y-2 text-[#5F5F5F] text-[14px] ml-4">
          {product.packageDetail?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
