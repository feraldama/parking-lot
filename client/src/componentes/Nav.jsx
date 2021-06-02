import React from "react";
import Logo from "../img/parkingLot.png";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav-container">
      <div>
        <div>
          <Link to="/">
            <div>
              <img
                id="logoHenry"
                src={Logo}
                width="90"
                height="90"
                alt="Logo Henry"
              />
              <h1 className="titulo">
                <strong>Parking</strong>LOTS
              </h1>
            </div>
          </Link>
        </div>{" "}
      </div>
      <div>
        <SearchBar handleChange={(e) => console.log(e.target.value)} />
      </div>
    </nav>
  );
}

export default Nav;
