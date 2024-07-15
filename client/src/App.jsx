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

const App = () =>{
    return(
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home/>} />

                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App