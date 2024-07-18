import React from "react";
import { Routes, Route } from "react-router-dom";
//import Home from "./core/Home";
import Home from "./src/pages/Home";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Users from "./user/Users.jsx";
import Signup from "./user/Signup.jsx";
import Signin from "./lib/Signin.jsx";
import Profile from "./user/Profile.jsx";
import PrivateRoute from "./lib/PrivateRoute.jsx";
import EditProfile from "./user/EditProfile.jsx";
import Menu from "./core/Menu";
import AddItem from "./item/AddItem.jsx";

function MainRouter() {
  return (
    <div>
      <Menu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainRouter;
