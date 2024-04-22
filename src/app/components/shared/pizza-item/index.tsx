import { FC } from "react";
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
              onClick={() => {}}
              title={title}
              className="pizza-button"
            >
              {TYPES[item]}
            </Button>
          ))}
        </div>
        <div className="pizza-options_content">
          {sizes.map((item) => (
            <Button
              key={uuidv4()}
              onClick={() => {}}
              title={title}
              className="pizza-button"
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
          <Button onClick={() => {}} title={title}>
            {ADD}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
