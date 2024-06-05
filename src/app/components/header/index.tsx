import { Link, useLocation } from "react-router-dom";
import Button from "../shared/button";
import Input from "../shared/input";

import "./styles.scss";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/slices/cart/selectors";

const Header = () => {
  const { totalPrice, items } = useSelector(selectCart);
  const quantity = items.reduce((sum, items) => items.quantity + sum, 0);
  const location = useLocation();

  return (
    <div className="header">
      <Link to={"/pizza"}>
        <div className="h-title">PIZZA-STORE</div>
      </Link>
      <Input />
      <Link to={"cart"}>
        {location.pathname !== "/cart" && (
          <Button onClick={() => {}} title={""} styleType="cart">
            {totalPrice} Р. | {quantity}
          </Button>
        )}
      </Link>
    </div>
  );
};

export default Header;
