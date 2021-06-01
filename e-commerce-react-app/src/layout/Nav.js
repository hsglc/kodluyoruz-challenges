import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          {" "}
          <NavLink to="/" activeClassName={classes.active} exact>
            All Stars
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/women" activeClassName={classes.active}>
            Women
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/men" activeClassName={classes.active}>
            Men
          </NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
