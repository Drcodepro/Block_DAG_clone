import React from "react";
import "./Home.css"
import Carousel from "../Home_Carousel/Caraousel";
import Mobilepage from "../Mobile_page/Mobilepage";

export default function Home(){
    return (<div className="Home_container">
    <Carousel/>
    <Mobilepage/>
    </div>)
}