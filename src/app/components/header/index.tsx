import { Link } from "react-router-dom";
import Button from "../shared/button";
import Input from "../shared/input";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/pizza"}>
        <div className="h-title">PIZZA-STORE</div>
      </Link>
      <Input />
      <Link to={"cart"}>
        <Button onClick={() => {}} title="cart" styleType="cart">
          CART
        </Button>
      </Link>
    </div>
  );
};

export default Header;
