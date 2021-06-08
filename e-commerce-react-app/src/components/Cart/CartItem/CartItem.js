import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import classes from "./CartItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  const amountStyle = {
    padding: ".4rem",
    background: "white",
    borderRadius: "5px",
    color: "black",
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (id) => {
    cartCtx.addItem(item);
  };

  return (
    <div className={classes.container}>
      <div>
        <p>{item.title}</p>
        <p>{`${item.price} $`}</p>
      </div>

      <div className={classes.buttons}>
        <div className={classes.space}>
          <p style={amountStyle}>x {item.amount}</p>
        </div>
        <button
          className={classes.space}
          onClick={cartItemRemoveHandler.bind(null, item.id)}
        >
          <RemoveIcon />
        </button>
        <button
          className={classes.space}
          onClick={cartItemAddHandler.bind(null, item.id)}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
