import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/mourika-cultures-logo.svg";
import "./index.css";

const LoginFormCustomer = () => {
  const [phoneNumber, setPhoneNumeber] = useState("");
  const [showContinueBtn, setShowContinueBtn] = useState(false);

  const baseUrl = process.env.REACT_APP_MOURIKA_BACKEND_URL;
  console.log(baseUrl);

  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };

  const handleInputPhoneNo = (e) => {
    const input = e.target.value;

    // Allow only digits using RegEx
    const onlyDigits = input.replace(/\D/g, "");

    // Max length of 10 digits
    if (onlyDigits.length <= 10) {
      setPhoneNumeber(onlyDigits);

      if (onlyDigits.length === 10) {
        setShowContinueBtn(true);
      } else {
        setShowContinueBtn(false);
      }
    }
  };

  return (
    <div className="form_bg_container">
      <div className="form_container">
        <img src={Logo} alt="Logo" className="logo" onClick={handleHomeClick} />
      </div>
      <div className="login_form_container">
        <h3>Welcome!</h3>
        <p>Enter your mobile number to start shopping.</p>
        <label htmlFor="phone">Phone Number</label>
        <div className="phone_input_container">
          <span
            className="country_code"
            onClick={() =>
              alert(
                "This app is exclusively for Indian customers at the moment."
              )
            }
            style={{ cursor: "pointer" }}
          >
            +91
          </span>
          <input
            id="phone"
            placeholder="Enter phone number"
            type="text"
            value={phoneNumber}
            onChange={handleInputPhoneNo}
          />
        </div>

        <p>
          If you are new customer please{" "}
          <Link to="/customer-register">register</Link> first
        </p>
        <button className="login_form_btns" onClick={handleHomeClick}>
          Back
        </button>
        {showContinueBtn ? (
          <button className="login_form_btns">Continue</button>
        ) : (
          <button className="login_form_btns login_form_continue_btn">
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginFormCustomer;
