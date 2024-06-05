import { FC } from "react";

import "./style.scss";
import { TextMLight } from "../shared/typography";
import { useDispatch } from "react-redux";
import {
  addItem,
  minusItem,
  removeItem,
} from "../../store/slices/cart/cartSlice";

interface CartItemProps {
  id: number;
  title: string;
  type: string;
  size: number;
  price: number;
  quantity: number;
  imageUrl: string;
}

const SIZES = ["26sm.", "30sm.", "40sm"];

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
    dispatch(
      addItem({
        id,
        title: "",
        price: 0,
        imageUrl: "",
        type: "",
        size: 0,
        count: 0,
        quantity: 0,
      })
    );
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
            <div className="cart-item-title">{title}</div>
            <div className="cart-item-options">
              <div>
                <TextMLight>{type}</TextMLight>,{" "}
                <TextMLight>{SIZES[size]}</TextMLight>
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
