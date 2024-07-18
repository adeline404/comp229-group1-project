// import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import MainRouter from "../MainRouter";

import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";
import Footer from "./components/Footer";
import FlightEditor from "./pages/FlightEditor";

const App = () =>{
    return(
        <Router>
            <MainRouter />
        </Router>
    )
}

export default App