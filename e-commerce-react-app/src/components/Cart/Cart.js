import {useContext} from 'react';
import CartContext from '../../store/cart-context';

function Cart() {

    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.length;

    return (
        <button>
            Cart ({numberOfCartItems})
        </button>
    )
}

export default Cart
