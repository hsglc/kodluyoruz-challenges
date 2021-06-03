import {useContext} from 'react';
import CartContext from '../../store/cart-context';
import {useHistory} from 'react-router-dom';

function Cart() {

    const history = useHistory();


    const cartCtx = useContext(CartContext);

    const goCheckoutHandler = () =>{
        history.push("./checkout");
    }


    const numberOfCartItems = cartCtx.items.length;

    return (
        <button onClick={goCheckoutHandler} >
            Cart ({numberOfCartItems})
        </button>
    )
}

export default Cart
