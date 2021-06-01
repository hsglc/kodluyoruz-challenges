function Product(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.item.title}</h2>
      <h4>{props.item.description}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}

export default Product;
