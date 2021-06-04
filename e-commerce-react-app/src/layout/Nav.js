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
            Women Clothes
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/men" activeClassName={classes.active}>
            Men Clothes
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/jewelery" activeClassName={classes.active}>
            Jeweleries
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink to="/electronics" activeClassName={classes.active}>
            Electronics
          </NavLink>{" "}
        </li>
        
      </ul>
    </nav>
  );
}

export default Nav;
