import React from "react";
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import ItemSortingPagination from "../components/ItemSortingPagination";
import Pagination from "../components/Pagination";

class IdeasPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: Number(localStorage.getItem("show")) || 10,
      sort: localStorage.getItem("sort") || "published_at",
      page: Number(localStorage.getItem("page")) || 1,
      totalPage: Number(localStorage.getItem("totalPage")) || 10,
    };
  }

  onShowChange = (show) => {
    const totalPage = 100 / show;
    const page = Math.min(this.state.page, totalPage); 

    this.setState(() => {
      localStorage.setItem("show", show);
      localStorage.setItem("totalPage", totalPage);
      localStorage.setItem("page", page); 
      return {
        show,
        totalPage,
        page, 
      };
    });
  };

  onSortChange = (sort) => {
    this.setState(() => {
      localStorage.setItem("sort", sort);
      return {
        sort,
      };
    });
  };

  onPageChange = (page) => {
    this.setState(() => {
      localStorage.setItem("page", page);
      return {
        page,
      };
    });
  };

  render() {
    return (
      <div>
        <Banner />
        <div className="mx-24 my-6">
          <ItemSortingPagination page={this.state.page} show={this.state.show} sort={this.state.sort} sortChange={this.onSortChange} showChange={this.onShowChange} />
          <PostList show={this.state.show} sort={this.state.sort} page={this.state.page} />
          <Pagination currentPage={this.state.page} pageChange={this.onPageChange} totalPages={this.state.totalPage} />
        </div>
      </div>
    );
  }
}

export default IdeasPage;
