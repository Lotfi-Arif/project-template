import { CATEGORY_LINKS } from '../lib/const/navigation';
import Link from 'next/link';
import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';

function CategoryMenu() {
  return (
    <div className="border-b border-b-gray-300 bg-white">
      <div className="layout-w px-2">
        <div className="py-3">
          <ul className="flex items-center gap-6 text-sm">
            <Link
              href={'/categories'}
              className="hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              <RiMenu2Line fontSize={18} />
              All Category
            </Link>
            {CATEGORY_LINKS.map((cat, idx) => (
              <Link
                key={cat.path + idx}
                href={cat.path}
                className="hover:opacity-80 transition-opacity"
              >
                {cat.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CategoryMenu;
