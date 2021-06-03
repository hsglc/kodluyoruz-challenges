import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import DeleteIcon from '@material-ui/icons/Delete';
import classes from './CartItem.module.css'

function CartItem(props) {


  const amountStyle = {
    'padding':'.4rem',
    'background':'white',
    'borderRadius':'5px',
    'color':'black',

  }

  const cartItemRemoveHandler = id => {}


  return (
    <div className={classes.container}>
      <LocalShippingIcon className={classes.space}/>
      <div>
        <p>{props.item.title}</p>
        <p>{`${props.item.price} $`}</p>
        <span style={amountStyle} >x {props.item.amount}</span>
      </div>
      
      <button className={classes.space} onClick={cartItemRemoveHandler.bind(null,props.item.id)} >
          <DeleteIcon />
      </button>
    </div>
  );
}

export default CartItem;
