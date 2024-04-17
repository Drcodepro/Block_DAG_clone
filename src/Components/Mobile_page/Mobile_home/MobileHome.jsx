import React from "react";
import "./MobileHome.css"
import { useState } from "react";

export default function MobileHome(props) {

  const [arrowAnim,setarrowAnim] = useState(false)
 function handleAnime(){
  setarrowAnim(!arrowAnim);

  setTimeout(()=>{
    // this function provided by mobile.jsx com
    props.moibleHomeShow(); // it will handle to show or not the home page of mobile ui
  },2000)
 }

  return (
    <div className="MobileHome_container">
      <div className="Mobile_logo_container">
        <img src="./BlockDAG_logo.gif" alt="logo" className="nav_logo" />
        <h1>BlockDAG</h1>
      </div>
      <div className="otherContent">
        <h2>Crypto Mining, For All</h2>
        <p>Experience the simplest and most rewarding crypto mining from anywhere.</p>
        <h2 style={{color:"#41C9E2", fontWeight:"900"}}>CLICK ME <b/>
        <button className="arrow_button" onClick={handleAnime}><img src="./Mobile_related_images/arrow_button.png" alt="arrow button" className={arrowAnim?"button_animetion":null}/></button>
        </h2>
      </div>
    </div>
  );
}
