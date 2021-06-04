import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RemoveIcon from '@material-ui/icons/Remove';
import classes from './CartItem.module.css'
import {useContext} from 'react';
import CartContext from "../../store/cart-context";

function CartItem({item}) {
  
  const cartCtx = useContext(CartContext);

  const amountStyle = {
    'padding':'.4rem',
    'background':'white',
    'borderRadius':'5px',
    'color':'black',

  }

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  }

 
  return (
    <div className={classes.container}>
      <LocalShippingIcon className={classes.space}/>
      <div>
        <p>{item.title}</p>
        <p>{`${item.price} $`}</p>
        <span style={amountStyle} >x {item.amount}</span>
      </div>
      
      <button className={classes.space} onClick={cartItemRemoveHandler.bind(null,item.id)} >
          <RemoveIcon />
      </button>
    </div>
  );
}

export default CartItem;
