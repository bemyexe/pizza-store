import { FC } from "react";
import ReactPaginate from "react-paginate";
import "./style.scss";
import { useSelector } from "react-redux";
import { filterSelectors } from "../../../store/filter/filter.selectors";
import { useAppDispatch } from "../../../store";
import { setPage } from "../../../store/filter/filter.slice";

const Pagination: FC = () => {
  const currentPage = useSelector(filterSelectors.pageCount);
  const dispatch = useAppDispatch();
  const onChangePage = (number: number) => {
    dispatch(setPage(number));
  };
  return (
    <ReactPaginate
      className={"page"}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      forcePage={currentPage - 1}
    />
  );
};

export default Pagination;
