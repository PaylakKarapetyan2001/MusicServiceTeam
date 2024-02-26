import React from "react";
import "../../assets/css/main.scss";
import LoginWrapper from "./LoginWrapper";
import { Link } from "react-router-dom";
import Google from "../../assets/svg/Frame.svg";
function Login() {
  return (
    <LoginWrapper>
      <div className="container">
        <div className="login-block">
          <div className="login-box">
            <div className="login-form-box">
              <form className="login-form">
                <h1>Log in</h1>
                <div>
                  <label htmlFor="emailOrUsername">Email or username</label>
                  <input
                    type="text"
                    id="emailOrUsername"
                    name="emailOrUsername"
                    placeholder="Email or username "
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="login-btn">
                    Log In
                  </button>
                </div>
                <div>
                  <Link to="/forget">Forgot your password?</Link>
                </div>
                <div>
                  <button type="button" className="continue">
                    <img src={Google} />
                    Continue with Google
                  </button>
                </div>
                <span></span>
              </form>
              <div>
                <p>
                  Don't have an account? <Link to="/sign-up" className="link">Sign Up</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoginWrapper>
  );
}

export default Login;
