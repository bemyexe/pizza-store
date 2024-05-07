import { useEffect, useRef, useState } from "react";
import Button from "../button";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSort } from "../../../store/slices/filterSlice";

const LIST = [
  { sortType: "popular" },
  { sortType: "price" },
  { sortType: "letters" },
];

const Sort = () => {
  const sortRef = useRef(null);
  const sort = useSelector((state) => state.filter.sort.sortType);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickSort = (obj) => {
    dispatch(setSort(obj));
    setOpen(!open);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
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
