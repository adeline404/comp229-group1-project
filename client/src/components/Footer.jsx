import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/head_foot.css";
import instagram from "../assets/img_head_foot/instagram_icon.svg";
import vk from "../assets/img_head_foot/vk_icon.png";
import whatsapp from "../assets/img_head_foot/whatsapp.png";
import buttonUp from "../assets/img_head_foot/up_upload_icon.png"



const Footer = () => {
    return (
        <div>
            <footer>
                <br></br>
                <br></br>
                <br></br>
                <div className="wrapper">
                    <div className="blockFooter">
                        <div className="textFooter">
                            <Link><p>Login to your personal account</p></Link>
                            <Link><p>Register in your personal account</p></Link>
                            <Link><p>Flight status</p></Link>
                            <Link><p>Ticket booking</p></Link>
                        </div>

                        <div className="textFooter">
                            <p>Additional services:</p>
                            <Link><p>Baggage</p></Link>
                            <Link><p>Seat selection on board</p></Link>
                            <Link><p>Unaccompanied children</p></Link>
                            <Link><p>Issuing booking and flight information</p></Link>
                        </div>
                    </div>

                    <div className="Contacts">
                        <div className="support">
                            <h1 className="textDecor">Passenger Support Service:</h1>
                            <a href="tel: +7 457-853-24-96">
                                <p> +7 457-853-24-96</p>
                            </a>
                            <a href="tel: +7 184-682-38-88">
                                <p>+7 184-682-38-88</p>
                            </a>
                            <a href="tel: +7 292-481-89-22">
                                <p>+7 292-481-89-22</p>
                            </a>
                            <a href="tel: +7 877-247-32-77">
                                <p>+7 877-247-32-77</p>
                            </a>
                        </div>

                        <div className="icons">
                            <h1 className="textDecor">We are in social networks:</h1>

                            <div className="photos">
                                <Link to="https://www.instagram.com/"><img src={instagram} alt="instagram icon" style={{ height: "64px" }} /></Link>
                                <Link to="https://vk.com/"><img src={vk} alt="vk icon" /></Link>
                                <Link to="https://web.whatsapp.com/"><img src={whatsapp} alt="whatsapp icon" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="ButtonUp">
                <a href="#Up">
                    <img src={buttonUp} alt="buttonUp" />
                </a>
            </div>
        </div>
    )
}

export default Footer