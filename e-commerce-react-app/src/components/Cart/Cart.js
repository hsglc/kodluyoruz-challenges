import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { useHistory } from "react-router-dom";

import classes from "./Cart.module.css";

function Cart() {
  const history = useHistory();

  const cartCtx = useContext(CartContext);

  const goCheckoutHandler = () => {
    history.push("./result");
  };
  
  const numberOfCartItems = cartCtx.items.reduce(
    (currNumber, item) => currNumber + item.amount,
    0
  );

  return (
    <button onClick={goCheckoutHandler} className={classes.cart}>
      Cart ({numberOfCartItems})
    </button>
  );
}

export default Cart;
