import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <ul className={classes.nav}>
      <li>
        <NavLink
          to="/"
          className="normal"
          activeClassName={classes.active}
          exact
        >
          BMI Calculator
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bmi"
          className="normal"
          activeClassName={classes.active}
          exact
        >
          What's BMI
        </NavLink>
      </li>
    </ul>
  );
}

export default Nav;
