import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ProductCardCompactProps } from './types';

function ProductCardCompact({ product }: ProductCardCompactProps) {
  const { image, name, price } = product;
  return (
    <Link
      href="/product"
      className="group hover:shadow-sm rounded-lg bg-white border border-gray-300 flex flex-col gap-2 py-3 px-3"
    >
      <div className="group-hover:scale-105 transition-transform">
        <Image src={image} width={200} height={200} alt="" />
      </div>
      <strong className="block font-medium text-gray-900">{price}</strong>
      <p className="leading-tight text-gray-400 font-normal">{name}</p>
    </Link>
  );
}

export default ProductCardCompact;
