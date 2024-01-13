import React from 'react';
import CountdownTimer from './CountdownTimer';
import ProductCardWithDiscount from './ProductCardWithDiscount';
import { QUICK_OFFERS } from '../lib/const/product';

function QuickDeals() {
  return (
    <div className="my-6 border border-gray-300 bg-white rounded-lg flex divide-x divide-gray-300 overflow-hidden">
      <div
        className="p-3 pr-12 min-h-[14rem] flex flex-col bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/offer-bg.png')" }}
      >
        <h3 className="text-xl font-medium">Deals and offers</h3>
        <p className="leading-tight text-gray-400 font-normal">
          Hygiene equipments
        </p>
        <div className="pt-6">
          <CountdownTimer />
        </div>
      </div>
      <div className="flex-1 flex items-center divide-x divide-gray-300">
        {QUICK_OFFERS.map((product) => (
          <ProductCardWithDiscount key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default QuickDeals;
