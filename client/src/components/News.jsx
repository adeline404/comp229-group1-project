import React from "react";
import "../assets/styles/head_foot.css";
import { Link } from "react-router-dom";

const News = () => {
    return (
        <div>
            <div className="secondLine">
                <div className="wrapper2">
                    <span className="textSL">Actual information on the temporary cancellation of flights to a number of airports. <Link>More</Link></span>
                    <span className="textSL2">Before departure, familiarize yourself with the peculiarities of entering countries and preventive measures. <Link>More</Link></span>
                </div>
            </div>
        </div>
    )
}

export default News