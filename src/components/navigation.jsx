import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
    return (
      <div className="navigation">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              Bookaway
            </NavLink>
            <div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Hem
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="./contact">
                    Kontakt
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="./flights">
                    Flyg
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="./Taxi">
                    Taxi
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  
  export default Navigation;