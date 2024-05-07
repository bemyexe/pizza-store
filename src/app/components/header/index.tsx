import { Link } from "react-router-dom";
import Button from "../shared/button";
import Input from "../shared/input";

import "./styles.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { totalPrice, items } = useSelector((state) => state.cart);
  const quantity = items.reduce((sum, items) => items.quantity + sum, 0);
  return (
    <div className="header">
      <Link to={"/pizza"}>
        <div className="h-title">PIZZA-STORE</div>
      </Link>
      <Input />
      <Link to={"cart"}>
        <Button onClick={() => {}} title={""} styleType="cart">
          {totalPrice} Р. | {quantity}
        </Button>
      </Link>
    </div>
  );
};

export default Header;
