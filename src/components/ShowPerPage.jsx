import React from "react";

const ShowPerPage = ({ show, showChange }) => {
  return (
    <div>
      <label htmlFor="show-per-page">Show per page: </label>
      <select id="show-per-page" onChange={(ev) => showChange(ev.target.value)} value={show} className="border w-16 p-1 rounded-2xl border-gray-300 focus:outline-none focus:ring focus:border-blue-300">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
      </select>
    </div>
  );
};

export default ShowPerPage;
