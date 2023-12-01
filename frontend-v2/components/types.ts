export type Product = {
  id: string;
  name: string;
  price: string;
  image: string;
};

export type FetchProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type FetchedProduct = {
  product: FetchProduct;
};

export type ProductWithDiscount = {
  discount: string;
  name: string;
  image: string;
};

export type ProductDiscountProps = {
  product: ProductWithDiscount;
};

export type ProductCardCompactProps = {
  product: Product;
};
