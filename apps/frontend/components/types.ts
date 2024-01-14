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

export type SingleProductResponse = {
  product: FetchProduct;
};

// Define the type for the overall structure
export type ProductResponse = {
  products: FetchProduct[];
  total: number;
  skip: number;
  limit: number;
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
