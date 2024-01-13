import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductDiscountProps } from './types';

function ProductCardWithDiscount({ product }: ProductDiscountProps) {
  const { name, discount, image } = product;
  return (
    <Link
      href="/product"
      className="group w-full flex flex-col gap-2 py-3 px-3 items-center"
    >
      <div className="group-hover:scale-105 transition-transform">
        <Image src={image} width={140} height={140} alt="" />
      </div>
      <strong className="block font-normal text-gray-900">{name}</strong>
      <span className="badge badge-success text-green-600 bg-opacity-30">
        {discount}
      </span>
    </Link>
  );
}

export default ProductCardWithDiscount;
