import { RECOMMENDED_PRODUCTS } from '../lib/const/product';
import Image from 'next/image';
import React from 'react';

function TrendingProducts() {
  return (
    <div className="my-6 border border-gray-300 bg-white rounded-lg flex overflow-hidden">
      <div
        className="p-3 pr-12 w-[18rem] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/offer-bg-2.png')" }}
      >
        <h3 className="text-xl font-medium mb-4">
          Casual, Formal & Trending Clothes
        </h3>
        <button className="btn btn-sm btn-secondary capitalize">
          Shop Now
        </button>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-4">
          {RECOMMENDED_PRODUCTS.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="relative min-h-[8rem] p-4 border-l border-l-gray-300"
            >
              <h2 className="pb-1">{product.name}</h2>
              <span className="text-gray-400 font-normal">
                From <br /> {product.price}
              </span>
              <Image
                src={product.image}
                className="absolute w-[5rem] right-1 bottom-1"
                width={80}
                height={80}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4">
          {RECOMMENDED_PRODUCTS.slice(4, 8).map((product) => (
            <div
              key={product.id}
              className="relative min-h-[8rem] p-4 border-l border-t border-gray-300"
            >
              <h2 className="pb-1">{product.name}</h2>
              <span className="text-gray-400 font-normal">
                From <br /> {product.price}
              </span>
              <Image
                src={product.image}
                className="absolute w-[5rem] right-1 bottom-1"
                width={80}
                height={80}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingProducts;
