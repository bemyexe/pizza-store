import { FC } from "react";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../../../store/cart/cart.selectors";
import CartItem from "../../cartItem";

const Cart: FC = () => {
  const cartItems = useSelector(cartSelectors.selectItems);
  return (
    <>
      {cartItems.map((item) => (
        <CartItem {...item} />
      ))}
    </>
  );
};

export default Cart;
