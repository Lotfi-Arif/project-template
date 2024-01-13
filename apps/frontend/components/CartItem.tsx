import Image from 'next/image';
import React from 'react';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import { ProductCardCompactProps } from './types';

function CartItem({ product }: ProductCardCompactProps) {
  const { name, price, image } = product;
  return (
    <div className="flex gap-6">
      <div className="w-[7rem] h-[7rem] rounded-lg overflow-hidden border border-gray-300">
        <Image src={image} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-lg">{name}</h2>
        <div className="text-sm text-gray-400">
          <p>Seller: Nice Seller Ltd</p>
          <p>Brand: Nike</p>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <button className="btn btn-sm btn-outline capitalize btn-error">
            Remove
          </button>
          <button className="btn btn-sm btn-outline capitalize btn-primary">
            Save for later
          </button>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <strong className="font-semibold text-lg">{price}</strong>
        <div className="join pt-2">
          <button className="join-item btn btn-sm px-2 border border-gray-300">
            <RiAddFill fontSize={20} />
          </button>
          <button className="btn btn-sm px-4 join-item pointer-events-none bg-white border border-gray-300">
            1
          </button>
          <button className="join-item btn btn-sm px-2 border border-gray-300">
            <RiSubtractFill fontSize={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
