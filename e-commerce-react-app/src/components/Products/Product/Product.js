import { useHistory } from "react-router-dom";
import ProductUI from "../../UI/MaterialUI/ProductUI";

function Product({item}) {
  const history = useHistory();
  const productDetailHandler = () => {
    history.replace(`/${item.id}`);
  };

  return (
    <ProductUI
      changeHistory={productDetailHandler}
      image={item.image}
      title={item.title}
      description={item.description}
    />
  );
}

export default Product;
