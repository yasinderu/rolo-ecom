"use client";

import { Product, ProductColor } from "@/types";
import Header from "../Header";
import ProductCarousel from "./ProductCarousel";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import Footer from "../Footer";
import { useCart } from "@/contexts/cartContext";

interface ProductWrapperProps {
  product: Product;
}

export default function ProductWrapper({ product }: ProductWrapperProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0].value
  );
  const { addToCart } = useCart();
  const handleSelectImage = (index: number) => {
    setSelectedImage(index);

    if (product.id === 1 && index === 1) {
      setSelectedColor(product.colors[1].value);
    } else {
      setSelectedColor(product.colors[0].value);
    }
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(color);

    if (product.id === 1 && color === product.colors[1].value) {
      setSelectedImage(1);
    } else {
      setSelectedImage(0);
    }
  };

  const addToCartHandler = () => {
    const productImage =
      product.colors.length > 1 && selectedColor === product.colors[1].value
        ? product.img[1]
        : product.img[0];
    const cartItem = {
      ...product,
      img: [productImage],
      colors: [
        product.colors.find(
          (color) => color.value === selectedColor
        ) as ProductColor,
      ],
    };
    addToCart(cartItem);
  };

  return (
    <div>
      <Header />
      <main className="flex-grow max-w-7xl mx-auto w-full min-h-screen pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductCarousel
            product={product}
            selectedImage={selectedImage}
            handleSelectImage={handleSelectImage}
          />
          <ProductDetail
            product={product}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
        </div>
      </main>
      <Footer
        previousUrl="/"
        nextUrl="/cart"
        proceedBtnText="Add to Cart"
        productDetail={product}
        handleNextAction={addToCartHandler}
      />
    </div>
  );
}
