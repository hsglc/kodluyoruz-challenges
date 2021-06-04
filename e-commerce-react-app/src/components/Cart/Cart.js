import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import {useHistory} from 'react-router-dom';

function Cart() {

    const history = useHistory();

    const cartStyle = {
        'padding' : '1rem',
        'color':'white',
        'background':'black',
        'borderRadius':'10px',
        'fontSize' : '1.1rem',
        'cursor':'pointer',
    }

    const cartCtx = useContext(CartContext);

    const goCheckoutHandler = () =>{
        history.push("./result");
    }


    const numberOfCartItems = cartCtx.items.reduce((currNumber, item)=> currNumber + item.amount,0)

    return (
        <button onClick={goCheckoutHandler} style={cartStyle} >
            Cart ({numberOfCartItems})
        </button>
    )
}

export default Cart
