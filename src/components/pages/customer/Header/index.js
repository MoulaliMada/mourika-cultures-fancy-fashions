import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { MdOutlineFavorite } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Logo from "../../assets/mourika-cultures-logo.svg";

function Header() {
  const navigate = useNavigate();
  const isUserLogin = localStorage.getItem("customerToken");

  const handleInputClick = () => {
    navigate("/search"); // this will redirect to the search page
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleFavoriteClick = () => {
    navigate("/favorite");
  };

  return (
    <div className="header_bg_container">
      <div className="header_container">
        <img src={Logo} alt="Logo" className="logo" onClick={handleHomeClick} />
        <div className="icons_container">
          <FaHome className="header_icons" onClick={handleHomeClick} />
          <MdOutlineFavorite
            className="header_icons favorite"
            onClick={handleFavoriteClick}
          />
          <IoCart className="header_icons" onClick={handleCartClick} />
          {isUserLogin ? (
            <CgProfile className="header_icons" onClick={handleHomeClick} />
          ) : (
            <button className="login_btn" onClick={handleHomeClick}>
              Login
            </button>
          )}
        </div>
      </div>
      <div className="header_input_container">
        <div className="input_container">
          <input
            className="header_input"
            placeholder="Search for what do you want ?"
            onClick={handleInputClick}
          />
          <IoSearch className="IoSearch" />
        </div>
      </div>
    </div>
  );
}

export default Header;
