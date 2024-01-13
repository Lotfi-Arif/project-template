import React from 'react';
import ProductCardCompact from './ProductCardCompact';
import { RECOMMENDED_PRODUCTS } from '../lib/const/product';

function RecommendedProducts() {
  return (
    <div className="my-6">
      <h3 className="mb-4 text-xl font-medium">Recommended Products</h3>
      <div className="grid grid-cols-5 gap-4">
        {RECOMMENDED_PRODUCTS.map((product, idx) => (
          <ProductCardCompact key={idx} product={product} />
        ))}
      </div>
    </div>
  );
}

export default RecommendedProducts;
