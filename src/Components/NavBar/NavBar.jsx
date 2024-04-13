import React from "react";
import "./NavBar.css";
import Button from "../Buttons/Button";

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
      <Button value="Buy"/>     
    </div>
  );
}
