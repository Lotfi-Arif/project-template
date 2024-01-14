import React from 'react';
import ProductCategoryCard from '../components/ProductCategoryCard';
import { TRENDING_CATEGORIES } from '../lib/const/product';

function TrendingCategories() {
  return (
    <div className="my-6">
      <h3 className="mb-4 text-xl font-medium">Trending Category</h3>
      <div className="flex gap-4">
        {TRENDING_CATEGORIES.map((category) => (
          <ProductCategoryCard key={category.key} category={category} />
        ))}
      </div>
    </div>
  );
}

export default TrendingCategories;
