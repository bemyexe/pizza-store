import { FC } from "react";
import { CATEGORIES } from "../../../../data/pizza-categories";
import Button from "../button";
import classNames from "classnames";

import "./style.scss";

interface ToggleBarProps {
  className?: string;
}

const ToggleBar: FC<ToggleBarProps> = ({ className }) => {
  return (
    <div className={classNames("toggle-bar", className)}>
      {CATEGORIES.map((item, i) => (
        <Button key={i} onClick={() => {}} title={item}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ToggleBar;
