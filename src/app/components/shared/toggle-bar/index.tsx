import { FC, useState } from "react";
import { CATEGORIES } from "../../../../data/pizza-categories";
import Button from "../button";
import classNames from "classnames";

import "./style.scss";

interface ToggleBarProps {
  className?: string;
}

const ToggleBar: FC<ToggleBarProps> = ({ className }) => {
  const [activeToggle, setActiveToggle] = useState(0);

  return (
    <div className={classNames("toggle-bar", className)}>
      {CATEGORIES.map((item, i) => (
        <Button
          key={i}
          onClick={() => setActiveToggle(i)}
          title={item}
          className={activeToggle === i ? "active" : ""}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default ToggleBar;
