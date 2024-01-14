import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProductCategoryCard({
  category,
  size,
}: {
  category: { name: string; image: string };
  size?: string;
}) {
  const { name, image } = category;
  return (
    <Link
      href="/product"
      className="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300"
    >
      <Image
        alt=""
        src={image}
        className="object-cover w-full aspect-video group-hover:scale-105 transition-transform"
        width={size === 'xl' ? 500 : 300}
        height={size === 'xl' ? 500 : 300}
      />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
        {size === 'xl' ? (
          <>
            <h3 className="text-3xl font-bold text-white">{name}</h3>
            <p className="max-w-lg py-3 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque dolorum officia autem libero!
            </p>
            <button className="btn btn-secondary text-lg capitalize">
              Shop Now
            </button>
          </>
        ) : (
          <>
            <h3 className="text-xl font-medium text-white mb-2">{name}</h3>
            <button className="btn btn-sm btn-secondary capitalize">
              Shop Now
            </button>
          </>
        )}
      </div>
    </Link>
  );
}

export default ProductCategoryCard;
