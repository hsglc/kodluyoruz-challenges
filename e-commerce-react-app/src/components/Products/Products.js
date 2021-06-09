import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Product from "./Product/Product";
import classes from "./Products.module.css";

function Products() {
  const history = useHistory();

  const endpoint = history.location.pathname;

  const [products, setProducts] = useState([]);

  useEffect(() => {
    let baseURL = `https://fakestoreapi.com/products/category${endpoint}`;
    if (endpoint === "/men" || endpoint === "/women") {
      baseURL = `https://fakestoreapi.com/products/category${endpoint}'s clothing`;
    } else if (endpoint === "/") {
      baseURL = `https://fakestoreapi.com/products/category/electronics`;
    }

    const fetchProds = async () => {
      const response = await fetch(baseURL);
      const data = await response.json();
      const updatedData = data.map((item) => {
        const updateItem = { ...item, isFavorite: false };
        return updateItem;
      });
      setProducts(updatedData);
    };
    fetchProds();
  }, [endpoint]);

  return (
    <div className={classes.container}>
      {products.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Products;
