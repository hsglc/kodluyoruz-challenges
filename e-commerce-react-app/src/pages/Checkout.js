import CartItem from "../components/Cart/CartItem";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import classes from './Checkout.module.css';

function Checkout() {

  const totalAmountStyle = {
    'background' : 'yellow',
    'margin':'1rem',
    'padding': '1rem',
  }
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.container} >
      
      {cartCtx.items.map((item) => (
        <CartItem item={item} amount={item.amount}/>
      ))}
      <div style={totalAmountStyle}>Total Amount : {`${cartCtx.totalAmount.toFixed(2)} $`}</div>
    </div>
  );
}

export default Checkout;
