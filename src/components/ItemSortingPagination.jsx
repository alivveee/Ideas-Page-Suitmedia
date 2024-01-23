import ShowPerPage from "./ShowPerPage";
import SortBy from "./SortBy";

const ItemSortingPagination = ({ page, show, sort, showChange, sortChange }) => {
  return (
    <div className="flex flex-row pb-2">
      <p className="flex-1">
        showing {1 + show * page - show} - {show * page} of 100
      </p>
      <div className="flex flex-row gap-3">
        <ShowPerPage show={show} showChange={showChange} />
        <SortBy sort={sort} sortChange={sortChange} />
      </div>
    </div>
  );
};

export default ItemSortingPagination;
