import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={classes.nav}>
        <ul className={classes.flex}>
          <li>
            <NavLink
              to="/"
              className={classes.normal}
              activeClassName={classes.active}
              exact
            >
              BMI Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/what's-bmi"
              className={classes.normal}
              activeClassName={classes.active}
            >
              What's BMI
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
