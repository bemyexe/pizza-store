import { FC } from "react";
import { CATEGORIES } from "../../../../data/pizza-categories";
import Button from "../button";
import classNames from "classnames";

import "./style.scss";

interface ToggleBarProps {
  className?: string;
  categoryId: number;
  setCategoryId: (i: number) => void;
}

const ToggleBar: FC<ToggleBarProps> = ({
  className,
  categoryId,
  setCategoryId,
}) => {
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
