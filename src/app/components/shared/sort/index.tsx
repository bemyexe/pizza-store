import { useState } from "react";
import Button from "../button";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

const LIST = ["Popular", "Price", "Letters"];

const Sort = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const SORT_LIST = LIST[selected];

  const handleClickSort = (i: number) => {
    setSelected(i);
    setOpen(!open);
  };

  return (
    <div className="sort-main">
      <div className="sort-title">
        <div>Sort by:</div>
        <Button onClick={() => setOpen(!open)} title="popular" styleType="add">
          {SORT_LIST}
        </Button>
      </div>
      {open && (
        <div className="sort-popup">
          {LIST.map((item, i) => (
            <Button
              key={uuidv4()}
              onClick={() => handleClickSort(i)}
              title={item}
              styleType="add"
              className={selected === i ? "active" : ""}
            >
              {item}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sort;
