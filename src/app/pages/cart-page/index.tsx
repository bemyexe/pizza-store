import { useSelector } from "react-redux";
import Cart from "../../components/shared/cart";
import "./style.scss";
import { cartSelectors } from "../../../store/cart/cart.selectors";

const CartPage = () => {
  const isCartEmpty = useSelector(cartSelectors.selectItems).length;
  return (
    <div className="cart-page">
      {isCartEmpty ? <Cart /> : <div className="clear">CLEAR CART!</div>}
    </div>
  );
};

export default CartPage;
