import React from 'react';
import ProductCategoryCard from '../components/ProductCategoryCard';
import { TRENDING_CATEGORIES } from '../lib/const/product';

function TrendingCategoriesMain() {
  return (
    <div className="my-6">
      <div className="flex gap-4">
        {TRENDING_CATEGORIES.slice(0, 2).map((category) => (
          <ProductCategoryCard
            key={category.key}
            category={category}
            size="xl"
          />
        ))}
      </div>
    </div>
  );
}

export default TrendingCategoriesMain;
