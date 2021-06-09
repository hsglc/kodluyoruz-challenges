import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

import classes from "./CartItem.module.css";
import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

function CartItem({ item }) {
  const cartCtx = useContext(CartContext);

  const favoriteButton = useRef();

  const [isFavorite, setIsFavorite] = useState(false);

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

  const addItemToFavoriteHandler = () => {
    if (!isFavorite) {
      console.log("added");
      setIsFavorite(true);
      favoriteButton.current.style.color = "red";
    } else {
      console.log("removed");
      setIsFavorite(false);
      favoriteButton.current.style.color = "gray";
    }
  };

  return (
    <div className={classes.container}>
      <div>
        <p>{item.title}</p>
        <p>{`${item.price} $`}</p>
      </div>

      <div className={classes.buttons}>
        <IconButton
          aria-label="add to favorites"
          ref={favoriteButton}
          onClick={addItemToFavoriteHandler}
        >
          <FavoriteIcon />
        </IconButton>

        <div>
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
