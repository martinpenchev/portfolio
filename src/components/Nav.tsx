import * as React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  return (
    <nav
      className="navbar navbar-light border-bottom bg-white"
      style={{ boxShadow: "none" }}
    >
      <div className="container-fluid">
        <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1">PORTFOLIO</li>
        </ul>
        <ul className="navbar-nav d-flex flex-row me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-2">
            <Link to="/login" className="font-weight-bold">
              Projects
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signup" className="font-weight-bold">
              Learning
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
