import { FaStoreAlt } from "react-icons/fa";
import Cart from "../components/Cart/Cart";

import classes from "./Header.module.css";

import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>React Clothes</h1>
        <FaStoreAlt className={classes.icon} />
        <Cart />
      </header>
      <Nav />
    </>
  );
}

export default Header;
