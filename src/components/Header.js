import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          <h1>React To Music</h1>

          <ul className="nav-item-left">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Songs
              </Link>
            </li>
          </ul>
          <ul className="nav-item-right">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
