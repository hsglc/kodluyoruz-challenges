import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Products() {
  const history = useHistory();

  const endpoint = history.location.pathname;
  console.log(endpoint);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let baseURL = `https://fakestoreapi.com/products/category${endpoint}`;
    if (endpoint === "/men" || endpoint === "/women") {
      baseURL = `https://fakestoreapi.com/products/category${endpoint}'s clothing`;
    } else if (endpoint === "/") {
      baseURL = `https://fakestoreapi.com/products`;
    }

    console.log(baseURL);
    const fetchProds = async () => {
      const response = await fetch(baseURL);
      const data = await response.json();
      setProducts(data);
    };

    fetchProds();
  }, [endpoint]);




  console.log(products);

  return (
    <div>
      {products.map(item => (
        <h2 key={item.id} >{item.title}</h2>
      ))}
    </div>
  );
}

export default Products;
