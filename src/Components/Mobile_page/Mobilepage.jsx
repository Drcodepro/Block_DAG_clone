import "./Mobilepage.css";
import Button from "../Buttons/Button";
import Mobile from "./Mobile";

export default function Mobile_Page(){

    return(<div className="mobile_page_Container">
    <h1 className="mobile_page_heading">PRESALE</h1>
    <h3>$17.1M Raised So Far.</h3>
    <p className="mobile_page_para">Join the BlockDAG presale, engage with the project, and see your contribution grow to new heights.</p>
    <div className="mobile_page_buttons">
       <a href="https://purchase1.blockdag.network/?_gl=1*1hn41nq*_ga*MzM2ODMyNDkuMTcxMjcyNzEzNA..*_ga_CFNJ2D5XX8*MTcxMzQxOTYwOC4yOS4xLjE3MTM0MjAwMTQuMC4wLjA."><Button value="join Presale" /></a> 
       <a href="https://purchase1.blockdag.network/?_gl=1*1hn41nq*_ga*MzM2ODMyNDkuMTcxMjcyNzEzNA..*_ga_CFNJ2D5XX8*MTcxMzQxOTYwOC4yOS4xLjE3MTM0MjAwMTQuMC4wLjA."><Button value="How to Buy" trans ="trans"/></a>
    </div>
    <Mobile/>
    </div>)
}