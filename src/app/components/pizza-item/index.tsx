import { FC, useState } from "react";
import Button from "../shared/button";
import { TextLSemibold, TextMSemibold } from "../shared/typography";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/slices/cart/cartSlice";
import { selectCartItemById } from "../../store/slices/cart/selectors";

interface PizzaItemProps {
  id: number;
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
  const [type, setType] = useState(0);
  const [size, setSize] = useState(0);
  const ItemInCart = useSelector(selectCartItemById(id));
  const addedQuantity = ItemInCart ? ItemInCart.quantity : 0;
  const dispatch = useDispatch();
  const handleAddCart = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: TYPES[type],
      size: size,
      count: 0,
      quantity: 0,
    };
    dispatch(addItem(item));
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
          {sizes.map((item, i) => (
            <Button
              key={uuidv4()}
              onClick={() => {
                setSize(i);
              }}
              title={title}
              styleType="options"
              className={size === i ? "active" : ""}
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
        <div>
          <Button onClick={() => handleAddCart()} title={title} styleType="add">
            + {ADD}
            <TextLSemibold>
              {addedQuantity > 0 ? addedQuantity : ""}
            </TextLSemibold>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
