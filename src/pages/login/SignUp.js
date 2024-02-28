import React, { useState } from "react";
import "../../assets/css/main.scss";
import LoginWrapper from "./LoginWrapper";
import { Link } from "react-router-dom";
import Google from "../../assets/svg/Frame.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    setPasswordType(showPassword ? "password" : "text");
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    setConfirmPasswordType(showConfirmPassword ? "password" : "text");
  };

  return (
    <LoginWrapper>
      <div className="container">
        <div className="signUp-block">
          <div className="signUp-box">
            <form className="signUp-form">
              <h1>Sign up to start listening</h1>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="password-box">
                <label htmlFor="password">Password</label>
                <input
                  type={passwordType}
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={togglePasswordVisibility} className="icone"/>
              </div>
              <div className="password-box">
                <label htmlFor="confirmPassword">Repeat Password</label>
                <input
                  type={confirmPasswordType}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Repeat password"
                  required
                />
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} onClick={toggleConfirmPasswordVisibility} className="icone"/>
              </div>
              <div>
                <button type="submit" className="login-btn">
                  Sign Up
                </button>
              </div>
              <p>or</p>
              <div>
                <button type="button" className="continue">
                  <img src={Google} alt="Google" />
                  Sign Up with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default SignUp;
