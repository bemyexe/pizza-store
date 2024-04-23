import { FC, useState } from "react";
import Button from "../button";
import { TextMSemibold } from "../typography";
import { v4 as uuidv4 } from "uuid";

import "./style.scss";

interface PizzaItemProps {
  title: string;
  imageUrl: string;
  types: number[];
  sizes: number[];
  price: number;
}

const TYPES = ["тонкое", "традиционное"];
const ADD = "ADD";

const PizzaItem: FC<PizzaItemProps> = ({
  title,
  imageUrl,
  types,
  price,
  sizes,
}) => {
  const [type, setType] = useState(0);
  const [size, setSize] = useState(0);

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
          <Button onClick={() => {}} title={title} styleType="add">
            {ADD}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
