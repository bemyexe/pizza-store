import { useEffect, useRef, useState } from "react";
import Button from "../button";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { LIST } from "../../../../constants/sort-list";
import { useAppDispatch } from "../../../../store";
import { useSelector } from "react-redux";
import { filterSelectors } from "../../../../store/filter/filter.selectors";
import { setSortProperty } from "../../../../store/filter/filter.slice";
import { SortPrors } from "../../../../@types/sort-types";

const Sort = () => {
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const sort = useSelector(filterSelectors.sortName);
  const handleClickSort = (obj: SortPrors) => {
    dispatch(setSortProperty(obj));
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutSide = (e: { composedPath: () => EventTarget[] }) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current))
        setOpen(false);
    };
    document.body.addEventListener("click", handleClickOutSide);

    return () => {
      document.body.removeEventListener("click", handleClickOutSide);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort-main">
      <div className="sort-title">
        <div>Sort by: </div>
        <Button onClick={() => setOpen(!open)} title="popular" styleType="add">
          {sort}
        </Button>
      </div>
      {open && (
        <div className="sort-popup">
          {LIST.map((obj) => (
            <Button
              key={uuidv4()}
              onClick={() => handleClickSort(obj)}
              title={obj.name}
              styleType="add"
              className={sort === obj.name ? "active" : ""}
            >
              {obj.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
