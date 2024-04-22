import React from "react";
import "./Home.css"
import Carousel from "../Home_Carousel/Caraousel";
import Mobilepage from "../Mobile_page/Mobilepage";
import AboutSection from "./aboutSection/AboutSection";
import ShareSection from "./Share_Section_Home/ShareSection";
import RoadMap from "./RoadMap_Section/RoadMap";

export default function Home(){
    return (<div className="Home_container">
    <Carousel/>
    <Mobilepage/>
    <AboutSection/>
    <ShareSection/>
    <RoadMap/>
    </div>)
}