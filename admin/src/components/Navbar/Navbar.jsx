import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={assets.logo} alt="" />
        <img className="profile" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
      </div>
    </>
  );
};

export default Navbar;
