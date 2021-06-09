import CartItem from "../components/Cart/CartItem/CartItem";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from "./Result.module.css";

function Checkout() {
  const totalAmountStyle = {
    background: "yellow",
    margin: "1rem",
    padding: "1rem",
  };
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.container}>
      {cartCtx.items.map((item) => (
        <CartItem key={item.id} item={item} amount={item.amount} />
      ))}
      {cartCtx.items.length !== 0 && (
        <div style={totalAmountStyle}>
          Total Amount : {`${cartCtx.totalAmount.toFixed(2)} $`}
        </div>
      )}
      {!cartCtx.items.length && (
        <div
          style={{
            background: "green",
            padding: "1rem",
            color: "white",
            fontSize: "1.5rem",
            marginTop: "1rem",
          }}
        >
          No item found in your cart!
        </div>
      )}
    </div>
  );
}

export default Checkout;
