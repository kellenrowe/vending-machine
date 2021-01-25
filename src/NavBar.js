import { NavLink } from "react-router-dom";
import "./NavBar.css";

/** Rendering of the NavBar component. 
 *  
 *  App -> NavBar
 * */

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
          Home
      </NavLink>
      <NavLink exact to="/ouzo">
          Ouzo
      </NavLink>
      <NavLink exact to="/bourbon">
          Bourbon
      </NavLink>
      <NavLink exact to="/sake">
          Sake
      </NavLink>
    </nav>
  );
}

export default NavBar;
