import { Link, NavLink } from "react-router-dom";
import logo from "../assets/red30-tech-logo.png";

export default function Header() {
  const getClass=({isActive})=> isActive ? 'nav-active' : null;
  return (
    <header className="container">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Red30 Tech logo"
          title="Red30 Tech | Home"
        />
      </Link>

      <nav>
        <NavLink to="/" classname={getClass}>
          Home
        </NavLink>
        <NavLink to="/about" classname={getClass}>
          About
        </NavLink>
        <NavLink to="/categories" classname={getClass}>
          Categories
        </NavLink>
        <NavLink to="/Register" classname={getClass}>
          Register
        </NavLink>
      </nav>
    </header>
  );
}
