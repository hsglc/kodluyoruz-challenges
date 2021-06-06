import { useLocation, useHistory } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import CartContext from "../store/cart-context";
import ProductDetailUI from "../components/UI/ProductDetailUI";

function ProductDetail() {
  const location = useLocation();
  const history = useHistory();
  const [item, setItem] = useState();
  const cartCtx = useContext(CartContext);

  const backHomeHandler = () => {
    history.push("/");
  };

  const addItemToCartHandler = (item) => {
    cartCtx.addItem(item);
  };

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products${location.pathname}`
      );
      const data = await response.json();
      const modifiedItem = { ...data, amount: 1 };
      setItem(modifiedItem);
    };
    fetchItem();
  }, [location]);

  const containerStyle = {
    background:
      "rgb(136,64,86) linear-gradient(133deg, rgba(136,64,86,1) 4%, rgba(195,157,130,1) 53%, rgba(178,168,193,1) 92%)",

    margin: "0 auto",
    padding: "2rem",
  };

  return (
    <div style={containerStyle}>
      {item && (
        <ProductDetailUI
          item={item}
          image={item.image}
          backHome={backHomeHandler}
          addItem={addItemToCartHandler.bind(null, item)}
        />
      )}
    </div>
  );
}

export default ProductDetail;
