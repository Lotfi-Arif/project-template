import React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

const availability = ['In Stock (5+)', 'Pre Order (3+)', 'Out of Stock (10+)'];
const colors = ['Red', 'Green', 'Purple', 'Violet', 'Black', 'Gray'];

function ProductFilterAside() {
  return (
    <div className="w-[18rem]">
      <p className="font-medium text-gray-700">Filters</p>

      <div className="mt-1 flex flex-col gap-4">
        <details
          className="overflow-hidden rounded-lg border border-gray-300 bg-white"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900">
            <span className="text-sm font-medium">Availability</span>
            <RiArrowDownSLine fontSize={18} />
          </summary>

          <div className="border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">1 Selected</span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4 flex flex-col gap-2">
              {availability.map((av, idx) => (
                <label
                  key={idx}
                  htmlFor={`av_${idx}`}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={`av_${idx}`}
                    className="checkbox checkbox-sm checkbox-primary border-gray-400"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {av}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </details>

        <details
          className="overflow-hidden rounded-lg border border-gray-300 bg-white"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900">
            <span className="text-sm font-medium">Price</span>
            <RiArrowDownSLine fontSize={18} />
          </summary>

          <div className="border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                The highest price is $600
              </span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceFrom"
                    placeholder="From"
                    className="input input-bordered rounded-lg input-sm w-full"
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="FilterPriceTo"
                    placeholder="To"
                    className="input input-bordered rounded-lg input-sm w-full"
                  />
                </label>
              </div>
            </div>
          </div>
        </details>

        <details
          className="overflow-hidden rounded-lg border border-gray-300 bg-white"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900">
            <span className="text-sm font-medium">Colors</span>
            <RiArrowDownSLine fontSize={18} />
          </summary>

          <div className="border-t border-gray-200">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">0 Selected</span>

              <button
                type="button"
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                Reset
              </button>
            </header>

            <div className="border-t border-gray-200 p-4 flex flex-col gap-2">
              {colors.map((col, idx) => (
                <label
                  key={idx}
                  htmlFor={`col_${idx}`}
                  className="flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    id={`col_${idx}`}
                    className="checkbox checkbox-sm checkbox-primary border-gray-400"
                  />

                  <span className="text-sm font-medium text-gray-700">
                    {col}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}

export default ProductFilterAside;
