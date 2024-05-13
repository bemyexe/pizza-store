import { useEffect, useRef, useState } from "react";
import Button from "../button";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../store/slices/filter/filterSlice";
import { selectSortType } from "../../../store/slices/filter/selectors";

type ListType = {
  sortType: string;
};

const LIST: ListType[] = [
  { sortType: "popular" },
  { sortType: "price" },
  { sortType: "letters" },
];

const Sort = () => {
  const sortRef = useRef<HTMLDivElement>(null);
  const sort = useSelector(selectSortType);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickSort = (item: string) => {
    dispatch(setSort(item));
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
        <div>Sort by:</div>
        <Button onClick={() => setOpen(!open)} title="popular" styleType="add">
          {sort}
        </Button>
      </div>
      {open && (
        <div className="sort-popup">
          {LIST.map((item) => (
            <Button
              key={uuidv4()}
              onClick={() => handleClickSort(item.sortType)}
              title={item.sortType}
              styleType="add"
              className={sort === item.sortType ? "active" : ""}
            >
              {item.sortType}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
