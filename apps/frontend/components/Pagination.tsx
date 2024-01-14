import React from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Pagination() {
  return (
    <div className="join mx-auto">
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        <RiArrowLeftSLine />
      </button>
      <button className="join-item btn btn-secondary rounded-lg btn-sm">
        1
      </button>
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        2
      </button>
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        3
      </button>
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        4
      </button>
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        ...
      </button>
      <button className="join-item btn bg-white border border-gray-300 rounded-lg btn-sm">
        <RiArrowRightSLine />
      </button>
    </div>
  );
}

export default Pagination;
