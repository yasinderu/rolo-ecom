import Footer from "@/components/Footer";
import ProductWrapper from "@/components/product/ProductWrapper";
import { CartProvider } from "@/contexts/cartContext";
import { products } from "@/data";
import { Product, SearchParamProps } from "@/types";

export default async function ProductDetailPage({ params }: SearchParamProps) {
  const { productId } = await params;

  const product = products.find((p) => p.id === Number(productId)) as Product;
  return (
    <div>
      <ProductWrapper product={product} />
    </div>
  );
}
