import { FC } from "react";

import Button from "../button";
import classNames from "classnames";

import "./style.scss";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../../../store";
import { setCategoryId } from "../../../../store/filter/filter.slice";
import { filterSelectors } from "../../../../store/filter/filter.selectors";

interface ToggleBarProps {
  className?: string;
}

const CATEGORIES = ["All", "Meat", "Vegan", "Grill", "Spicy", "Calzone"];

const ToggleBar: FC<ToggleBarProps> = ({ className }) => {
  const categoryId = useSelector(filterSelectors.selectCategoryId);
  const dispatch = useAppDispatch();

  return (
    <div className={classNames("toggle-bar", className)}>
      {CATEGORIES.map((item, i) => (
        <Button
          key={i}
          onClick={() => dispatch(setCategoryId(i))}
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
