import React from 'react';
import CartItem from '../components/CartItem';
import {
  RiArrowRightLine,
  RiDeleteBin2Line,
  RiLock2Line,
  RiShieldCheckFill,
} from 'react-icons/ri';
import RecommendedProducts from './RecommendedProducts';
import { RECOMMENDED_PRODUCTS } from '../lib/const/product';

function UserCart() {
  return (
    <div className="my-2">
      <h3 className="mb-4 text-xl font-medium">Cart (4)</h3>
      <div className="flex gap-6">
        <div className="flex-1 rounded-lg border border-gray-300 p-4 bg-white flex flex-col gap-6">
          {RECOMMENDED_PRODUCTS.slice(0, 4).map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

          <div className="mt-2 flex justify-between">
            <button className="btn btn-sm btn-error btn-outline capitalize">
              <RiDeleteBin2Line fontSize={20} /> Remove All
            </button>
            <button className="btn btn-sm btn-secondary btn-outline capitalize">
              Continue Shopping <RiArrowRightLine fontSize={20} />
            </button>
          </div>
        </div>
        <div className="w-[20rem] flex flex-col gap-6">
          <div className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col">
            <span className="pb-2">Have Coupon?</span>
            <div className="join">
              <input
                type="text"
                className="w-full input input-bordered input-sm join-item"
                placeholder="Enter Coupon Code"
              />
              <button className="join-item btn btn-sm btn-outline">
                Apply
              </button>
            </div>
          </div>
          <div className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span>Subtotal:</span>
              <span>$146.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount:</span>
              <span>-$20.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Tax:</span>
              <span>+$12.00</span>
            </div>
            <hr className="my-2" />
            <div className="flex items-center justify-between font-semibold my-2">
              <span>Total:</span>
              <span>$1346.00</span>
            </div>
            <button className="btn btn-secondary capitalize text-base">
              <RiLock2Line fontSize={20} /> Checkout
            </button>
            <div className="pt-4 flex items-center gap-3 text-xs text-gray-500">
              <RiShieldCheckFill fontSize={22} />
              Safe and Secure Payments. Easy returns.
            </div>
          </div>
        </div>
      </div>
      <RecommendedProducts />
    </div>
  );
}

export default UserCart;
