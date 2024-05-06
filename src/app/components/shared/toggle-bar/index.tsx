import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../button";
import classNames from "classnames";

import "./style.scss";
import { setCategoryId } from "../../../store/slices/filterSlice";

interface ToggleBarProps {
  className?: string;
}

const CATEGORIES = ["All", "Meat", "Vegan", "Grill", "Spicy", "Calzone"];

const ToggleBar: FC<ToggleBarProps> = ({ className }) => {
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();
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
