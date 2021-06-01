import { FaStoreAlt } from 'react-icons/fa';
import classes from './Header.module.css'


function Header() {
    return (
        <div className={classes.header} >
            <h1>React Clothes</h1>
            <FaStoreAlt className={classes.icon} />
        </div>
    )
}

export default Header
