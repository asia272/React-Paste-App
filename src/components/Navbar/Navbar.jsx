import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Past App</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className="nav-link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/allPastes" className="nav-link">All Pastes</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
