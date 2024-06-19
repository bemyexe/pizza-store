import { FC } from "react";

import "./style.scss";
import { TextMLight } from "../shared/typography";
import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  generateCartItemKey,
  increaseItemQuantity,
  removeItemFromCart,
} from "../../../store/cart/cart.slice";
import { CartItemProps } from "../../../@types/cart-types";

const SIZES: { [key: number]: string } = {
  26: "26sm.",
  30: "30sm.",
  40: "40sm",
};

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
  const newItem: CartItemProps = {
    id,
    title,
    type,
    size,
    price,
    quantity,
    imageUrl,
  };
  const onclickPlus = () => {
    dispatch(increaseItemQuantity(generateCartItemKey(newItem)));
  };

  const onclickMinus = () => {
    dispatch(decreaseItemQuantity(generateCartItemKey(newItem)));
  };

  const onDeleteItem = () => {
    dispatch(removeItemFromCart(generateCartItemKey(newItem)));
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
                <TextMLight>{type}</TextMLight>,
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
          onClick={() => onDeleteItem()}
        />
      </div>
    </div>
  );
};

export default CartItem;
