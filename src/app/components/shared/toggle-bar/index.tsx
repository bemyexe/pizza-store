import { FC, useState } from "react";
import { CATEGORIES } from "../../../../data/pizza-categories";
import Button from "../button";
import classNames from "classnames";

import "./style.scss";

interface ToggleBarProps {
  className?: string;
}

const ToggleBar: FC<ToggleBarProps> = ({ className }) => {
  const [categoryId, setCategoryId] = useState(0);
  return (
    <div className={classNames("toggle-bar", className)}>
      {CATEGORIES.map((item, i) => (
        <Button
          key={i}
          onClick={() => setCategoryId(i)}
          title={item}
          className={categoryId === i ? "active" : ""}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ToggleBar;
