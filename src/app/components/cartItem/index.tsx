import { FC } from "react";

import "./style.scss";
import { TextMLight } from "../shared/typography";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../../store/slices/cartSlice";

interface CartItemProps {
  id: string;
  title: string;
  type: string;
  size: number;
  price: number;
  quantity: number;
  imageUrl: string;
}

const CartItem: FC<CartItemProps> = ({
  id,
  title,
  type,
  size,
  price,
  quantity,
  imageUrl,
}) => {
  const dispatch = useDispatch();
  const onclickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onclickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-item-wrapper">
        <div className="cart-item-content">
          <img src={imageUrl} className="cart-item-img" />
          <div className="cart-item-main">
            <div className="cart-item-title">
              {id}
              {title}
            </div>
            <div className="cart-item-options">
              <div>
                <TextMLight>{type}</TextMLight>, <TextMLight>{size}</TextMLight>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-item-counter" onClick={() => onclickMinus()}>
          -
        </div>
        <div className="cart-item-counter">{quantity}</div>

        <div className="cart-item-counter" onClick={() => onclickPlus()}>
          +
        </div>
        <div className="cart-item-price"> {quantity * price} Р.</div>
        <img
          src="assets/delete.svg"
          className="cart-item-clear"
          onClick={() => dispatch(removeItem(id))}
        />
      </div>
    </div>
  );
};

export default CartItem;
