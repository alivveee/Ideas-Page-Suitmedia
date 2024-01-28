import React, { useState } from "react";
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import ItemSortingPagination from "../components/ItemSortingPagination";
import Pagination from "../components/Pagination";

const IdeasPage = () => {
  const [show, setShow] = useState(Number(localStorage.getItem("show")) || 10);
  const [sort, setSort] = useState(localStorage.getItem("sort") || "published_at");
  const [page, setPage] = useState(Number(localStorage.getItem("page")) || 1);
  const [totalPage, setTotalPage] = useState(Number(localStorage.getItem("totalPage")) || 10);

  const onShowChange = (newShow) => {
    const newTotalPage = 100 / newShow;
    const newPage = Math.min(page, newTotalPage);

    localStorage.setItem("show", newShow);
    localStorage.setItem("totalPage", newTotalPage);
    localStorage.setItem("page", newPage);

    setShow(newShow);
    setTotalPage(newTotalPage);
    setPage(newPage);
  };

  const onSortChange = (newSort) => {
    localStorage.setItem("sort", newSort);
    setSort(newSort);
  };

  const onPageChange = (newPage) => {
    localStorage.setItem("page", newPage);
    setPage(newPage);
  };

  return (
    <div>
      <Banner />
      <div className="mx-6 md:mx-12 xl:mx-24 my-6">
        <ItemSortingPagination page={page} show={show} sort={sort} sortChange={onSortChange} showChange={onShowChange} />
        <PostList show={show} sort={sort} page={page} />
        <Pagination currentPage={page} pageChange={onPageChange} totalPages={totalPage} />
      </div>
    </div>
  );
};

export default IdeasPage;
