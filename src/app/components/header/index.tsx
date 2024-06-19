import { Link, useLocation } from "react-router-dom";
import Button from "../shared/button";
import Input from "../shared/input";

import "./styles.scss";
import { useSelector } from "react-redux";
import { cartSelectors } from "../../../store/cart/cart.selectors";
import { useEffect, useState } from "react";

const Header = () => {
  const location = useLocation();
  const totalPrice = useSelector(cartSelectors.selectTotalPrice);
  const pizzaAdded = useSelector(cartSelectors.selectTotalItemsCount);
  const isPizzaAdded = pizzaAdded ? pizzaAdded : "No pizzass";

  const isCartPage = location.pathname === "/cart";

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        isCartPage ? "cart-header" : `header ${isScrolled ? "scrolled" : ""}`
      }
    >
      <Link to={"/pizza"}>
        <div className={"h-title"}>PIZZA-STORE</div>
      </Link>
      {!isCartPage && (
        <>
          <Input />
          <Link to={"cart"}>
            <Button
              className="cart"
              onClick={() => {}}
              title={""}
              styleType="cart"
            >
              {totalPrice} р.| {isPizzaAdded}
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
