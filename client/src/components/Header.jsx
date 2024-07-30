import React from "react";
import "../assets/styles/head_foot.css";
import burger from "../assets/img_head_foot/burger_icon.svg";
import language from "../assets/img_head_foot/earth_icon.svg";
import logo from "../assets/img_head_foot/canada_icon.svg";
import search from "../assets/img_head_foot/search_find_icon.svg";
import account from "../assets/img_head_foot/account_icon.svg";
import flight from "../assets/img_head_foot/flight_icon.png";
import reg from "../assets/img_head_foot/registration_icon.svg";
import News from "./News";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from "../../lib/auth-helper";


const isActive = (location, path) => {
  return location.pathname === path ? { color: '#ff4081' } : { color: '#ffffff' };
};

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

  return (
    <div>
      <div className="wrapper">
        <div className="firstLine" id="Up">

          <div className="logo">
            <img src={logo} alt="logoCanada" />
           <Link to="/"><span className="textLogo">canada</span> <span className="textLine">airlines</span></Link>
          </div>

          <div className="infoHeader">
            <div className="search">
              <Link to="/users"><img src={search} alt="search" /></Link>
            </div>

            <div className="language">
              <Link><img src={language} alt="language" /></Link>
              <span>ca (CAD, $)</span>
            </div>

            <div className="account">
              {auth.isAuthenticated() ? (
                <span>
                  <Link to={"/user/" + auth.isAuthenticated().user._id}>
                    <img src={account} alt="account" />
                  </Link>
                  <button onClick={() => { auth.clearJWT(() => navigate('/')); }}>
                    Sign out
                  </button>
                </span>
              ) : (
                <span>
                  <Link to="/signin">
                    <img src={account} alt="Sign In" />
                  </Link>
                </span>
              )}
            </div>

            <div className="registration">
                <Link to="/signup">
                  <img src={reg} alt="registration" />
                </Link>
            </div>

            <div className="flight">
              <Link to="/flights"><img src={flight} alt="flight" /></Link>
            </div>
          </div>
        </div>
      </div>
      <News />
    </div>
  );
};

export default Header