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
  const handleLoginClick = () => {
    navigate("/customer-login");
  };

  return (
    <div className="header_bg_container">
      <div className="header_container">
        <img src={Logo} alt="Logo" className="logo" onClick={handleHomeClick} />
        <div className="icons_container">
          <FaHome className="header_icons" onClick={handleHomeClick} />
          <MdOutlineFavorite
            className="header_icons"
            onClick={handleFavoriteClick}
          />
          <IoCart className="header_icons" onClick={handleCartClick} />
          <button className="tablet_nav_btns" onClick={handleHomeClick}>
            <FaHome className="tablet_header_icons" />
            <p>Home</p>
          </button>
          <button className="tablet_nav_btns" onClick={handleFavoriteClick}>
            <MdOutlineFavorite className="tablet_header_icons" />
            <p>Favorites</p>
          </button>
          <button className="tablet_nav_btns" onClick={handleCartClick}>
            <IoCart className="tablet_header_icons" />
            <p>Cart</p>
          </button>

          {isUserLogin ? (
            <CgProfile className="header_icons" onClick={handleHomeClick} />
          ) : (
            <button className="login_btn" onClick={handleLoginClick}>
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
