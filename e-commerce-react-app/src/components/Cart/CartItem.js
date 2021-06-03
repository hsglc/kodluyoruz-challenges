import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DeleteIcon from '@material-ui/icons/Delete';
import classes from './CartItem.module.css'

function CartItem(props) {
  return (
    <div className={classes.container}>
      <LocalShippingIcon className={classes.space}/>
      <div>
        <p>{props.item.title}</p>
        <p>{props.item.price}</p>
      </div>
      <button className={classes.space}>
          <DeleteIcon />
      </button>
    </div>
  );
}

export default CartItem;
