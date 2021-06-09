import classes from "./Favorites.module.css";
import { useContext, useEffect } from "react";
import CartItem from "../components/Cart/CartItem/CartItem";
import CartContext from "../store/cart-context";

function Favorites() {
  const cartCtx = useContext(CartContext);

  const favoriteItems = cartCtx.items.filter((item) => item.isFavorite);

  

  return (
    <div className={classes.container}>
      {favoriteItems.length === 0 && <div className={classes.not_founded}>No Favorite Item found honey!</div>}
      {favoriteItems.map((item) => (
        <CartItem key={item.id} item={item} type="favorite" />
      ))}
    </div>
  );
}

export default Favorites;
