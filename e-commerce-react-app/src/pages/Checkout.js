import CartItem from "../components/Cart/CartItem";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from './Checkout.module.css';

function Checkout() {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.container} >
      {cartCtx.items.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}

export default Checkout;
