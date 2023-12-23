import React from "react";

const SortBy = ({ sort, sortChange }) => {
  const onChange = (event) => {
    sortChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="short-by">Short by: </label>
      <select id="short-by" onChange={onChange} value={sort}className="border w-24 p-1 rounded-2xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
        <option value="-published_at">Newest</option>
        <option value="published_at">Oldest</option>
      </select>
    </div>
  );
};

export default SortBy;
