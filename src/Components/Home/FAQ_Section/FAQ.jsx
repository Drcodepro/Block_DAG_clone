import Button from "../../Buttons/Button";
import "./FAQ.css";

export default function FAQ(){
    return(<div className="FAQS_Section">
        <h1>FAQs</h1>
        <h2>Your most pressing queries, answered.</h2>
        <Button value="See All FAQs"/>

        <div className="Donation_box">
            <h2>Support Our Mission</h2>
            <p>Every contribution, regardless of its size, has a meaningful impact for our team, together have the power to bring about lasting change and forge a brighter future for everyone involved. Our community thrives on collaboration and shared commitment. <br/>
               The management of our community wallet rests in the capable hands of three elected members: XCat, Leopard Win, and Technix, who have earned the trust of the public through a democratic voting process. Operating as a multi-signature wallet, any spending transaction requires the authorization of at least two of these appointed Treasurers, ensuring a secure and transparent financial process.
            </p>
            <button className="Donation_button" style={{backgroundColor:"black"}}>Make a Donation</button>
        </div>

        <div className="signUp_section">
            <h2>Join the BlockDAG community and discover the fastest crypto mining journey.</h2>
            <div className="signUp_button">Sign Up</div>
        </div>
    </div>)
}