import React from 'react';

export default function Buttons({ page, setPage, nextDisabled }) {
  return (
    <div className="flex items-center justify-center gap-8 fixed bottom-0 left-0 w-full bg-gray-800 py-5">
      <button
        type="button"
        className="px-5 py-3 bg-green-500 rounded-sm w-40 text-lg uppercase"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <button
        type="button"
        disabled={nextDisabled}
        className="px-5 py-3 bg-green-500 rounded-sm w-40 text-lg uppercase"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
