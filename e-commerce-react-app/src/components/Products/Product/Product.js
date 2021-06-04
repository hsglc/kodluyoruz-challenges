import { useHistory } from "react-router-dom";
import ProductUI from "../../UI/MaterialUI/ProductUI";

function Product(props) {
  const history = useHistory();
  const productDetailHandler = () => {
    history.push(`/${props.item.id}`);
  };

  return (
    <ProductUI
      changeHistory={productDetailHandler}
      image={props.item.image}
      title={props.item.title}
      description={props.item.description}
    />
  );
}

export default Product;
