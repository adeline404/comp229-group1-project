import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/head_foot.css";
import burger from "../assets/img_head_foot/burger_icon.svg";
import language from "../assets/img_head_foot/earth_icon.svg";
import logo from "../assets/img_head_foot/canada_icon.svg";
import search from "../assets/img_head_foot/search_find_icon.svg";
import account from "../assets/img_head_foot/account_icon.svg";
import flight from "../assets/img_head_foot/flight_icon.png";
import News from "./News";


const Header = () => {
    return (
        <div>
            <header>
                <div className='leftMenu'>
                    <ul>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/profile"><li>Profile</li></Link>
                        <Link to="/search"><li>Search flights</li></Link>
                        <Link to="/registration"><li>Registration</li></Link>
                    </ul>
                </div>

                <div className="wrapper">

                    <div className="firstLine" id="Up">

                        <div className="menu">
                            <a href="#menu">
                                <img src={burger} alt="burger" />
                            </a>
                        </div>

                        <div className="logo">
                            <img src={logo} alt="logoCanada" />
                            <span className="textLogo">canada</span> <span className="textLine">airlines</span>
                        </div>

                        <div className="infoHeader">
                            <div className="search">
                                <Link><img src={search} alt="search" /></Link>
                            </div>

                            <div className="language">
                                <Link><img src={language} alt="language" /></Link>
                                <span>ca (CAD, $)</span>
                            </div>

                            <div className="account">
                                <Link><img src={account} alt="account" /></Link>
                            </div>

                            <div className="flight">
                                <Link to="FlightEditor"><img src={flight} alt="flight" /></Link>
                            </div>
                        </div>

                    </div>
                </div>

                <News />
            </header>
        </div>
    )
}

export default Header