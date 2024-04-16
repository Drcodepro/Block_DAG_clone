import "./Mobilepage.css";
import Button from "../Buttons/Button";
import Mobile from "./Mobile";

export default function Mobile_Page(){

    return(<div className="mobile_page_Container">
    <h1 className="mobile_page_heading">PRESALE</h1>
    <h3>$17.1M Raised So Far.</h3>
    <p className="mobile_page_para">Join the BlockDAG presale, engage with the project, and see your contribution grow to new heights.</p>
    <div className="mobile_page_buttons">
        <Button value="join Presale" />
        <Button value="How to Buy" trans ="trans"/>
    </div>
    <Mobile/>
    </div>)
}