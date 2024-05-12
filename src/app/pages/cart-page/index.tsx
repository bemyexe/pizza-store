import { useSelector } from "react-redux";
import CartItem from "../../components/cartItem";

import "./style.scss";
import { selectCartItems } from "../../store/slices/cart/selectors";

const CartPage = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-page">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <div className="clear">CLEAR CART!</div>
      )}
    </div>
  );
};

export default CartPage;
