import { FC, useState } from "react";
import Button from "../shared/button";
import { TextMSemibold } from "../shared/typography";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import { useAppDispatch } from "../../../store";
import { addItemToCart } from "../../../store/cart/cart.slice";

interface PizzaItemProps {
  id: string;
  title: string;
  imageUrl: string;
  types: number[];
  sizes: number[];
  price: number;
}

const TYPES = ["тонкое", "традиционное"];
const ADD = "ADD";

const PizzaItem: FC<PizzaItemProps> = ({
  id,
  title,
  imageUrl,
  types,
  price,
  sizes,
}) => {
  const [type, setType] = useState(types[0]);
  const [size, setSize] = useState(sizes[0]);
  const dispatch = useAppDispatch();
  const handleAddCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: TYPES[type],
      size,
      quantity: 1,
    };
    dispatch(addItemToCart(item));
  };

  return (
    <div className="pizza-item">
      <div className="pizza-header">
        <img src={imageUrl} className="pizza-img" />
        <TextMSemibold>{title}</TextMSemibold>
      </div>
      <div className="pizza-options">
        <div className="pizza-options_content">
          {types.map((item) => (
            <Button
              key={uuidv4()}
              onClick={() => {
                setType(item);
              }}
              title={title}
              styleType="options"
              className={type === item ? "active" : ""}
            >
              {TYPES[item]}
            </Button>
          ))}
        </div>
        <div className="pizza-options_content">
          {sizes.map((item) => (
            <Button
              key={uuidv4()}
              onClick={() => {
                setSize(item);
              }}
              title={title}
              styleType="options"
              className={size === item ? "active" : ""}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>
      <div className="pizza-footer">
        <div>
          <TextMSemibold>{`от ${price} Р`}</TextMSemibold>
        </div>
        <div
          className="p-buttons"
          title={title}
          onClick={(e) => {
            handleAddCart(e);
          }}
        >
          <Button onClick={() => {}} title={title}>
            +
          </Button>
          {ADD}
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
