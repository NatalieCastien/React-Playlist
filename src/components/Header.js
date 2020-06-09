import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-container">
          {/* <Link to="/" className="Nav__brand"> */}
          <h1>React To Music</h1>
          {/* <img src="logo.svg" className="Nav__logo" /> */}
          {/* </Link> */}

          <ul className="nav-item-left">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
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
