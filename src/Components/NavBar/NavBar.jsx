import React from "react";
import "./NavBar.css";
import Button from "../Buttons/Button";
import { Link, NavLink} from "react-router-dom";

export default function NavBar() {
  return (
    <div className="nav_Container">
      <div className="logo_container">
        <img src="./BlockDAG_logo.gif" alt="logo" className="nav_logo" />
        <h1>BlockDAG</h1>
      </div>
      <ul className="nav_List">
        <li>KEYNOTE</li>
        <li>DEVRELEASES</li>
        <li>PRODUCTS</li>
        <li>WIKI</li>
        <li>CALCULATOR</li>
        <li>MECHANICS</li>
      </ul>
      <NavLink to="Buy_Now"><Button value="Buy"/></NavLink>
    </div>
  );
}
