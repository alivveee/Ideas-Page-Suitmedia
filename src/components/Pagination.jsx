import React from "react";

const Pagination = ({ totalPages, currentPage, pageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPages = Math.min(totalPages, 5);

    let startPage = 1;
    if (currentPage > 5 && totalPages > 5) {
      startPage = Math.max(currentPage - 4, totalPages - 4);
    }

    for (let i = startPage; i <= Math.min(startPage + maxPages - 1, totalPages); i++) {
      pageNumbers.push(
        <button key={i} onClick={() => pageChange(i)} className={`mx-1 px-2 py-1 rounded-md focus:outline-none ${currentPage === i ? "bg-primary text-white" : " text-gray-700 hover:bg-gray-300"}`}>
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <button onClick={() => pageChange(1)} disabled={currentPage === 1} className="mx-1 py-1 font-bold tracking-tighter rounded-md focus:outline-none text-gray-700 hover:bg-gray-300">
        {"<<"}
      </button>
      <button onClick={() => pageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} className="mx-1 px-2 py-1 rounded-md focus:outline-none text-gray-700 hover:bg-gray-300">
        {"<"}
      </button>
      {renderPageNumbers()}
      <button onClick={() => pageChange(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages} className="mx-1 px-2 py-1 rounded-md focus:outline-none text-gray-700 hover:bg-gray-300">
        {">"}
      </button>
      <button onClick={() => pageChange(totalPages)} disabled={currentPage === totalPages} className="mx-1 py-1 font-bold tracking-tighter rounded-md focus:outline-none text-gray-700 hover:bg-gray-300">
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
