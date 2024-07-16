// import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";

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
            <Header />
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/FlightEditor" element={<FlightEditor/>} />
            </Routes>
            <Footer/>
        </Router>
    )
}

export default App