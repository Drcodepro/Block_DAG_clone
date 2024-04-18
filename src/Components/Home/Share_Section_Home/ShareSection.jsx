import React from "react";
import "./ShareSection.css"
export default function ShareSection(){
    return (<div className="ShareSecion_container">
        <h1 className="ShareSection_heading">SPREAD THE WORD</h1>
        <h1 className="another_h1">Rally your circle to BlockDAG, where shared efforts meet unprecedented rewards. Open a new chapter of crypto evolution.</h1>
        
        <div className="shareImage_container">
        <img src="./ShareMobile.svg" alt="shareMobile svg" className="shareMobileImg"/>
        
        <dir className="shareOption_Container">
        <img src="./Share_Option_logo/email.png" alt="email logo"/>
        <img src="./Share_Option_logo/twitter.png" alt="email logo"/>
        <img src="./Share_Option_logo/facebook.png" alt="email logo"/>
        <img src="./Share_Option_logo/whatsapp.png" alt="email logo"/>
       </dir>

        </div>
      
      
    </div>)
}