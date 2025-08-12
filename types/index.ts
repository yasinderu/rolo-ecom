export interface ProductColor {
  name: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  shortDesc: string;
  price: number;
  longDesc?: string[];
  img: string[];
  packageDetail?: string[];
  colors: ProductColor[];
  oldPrice?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
