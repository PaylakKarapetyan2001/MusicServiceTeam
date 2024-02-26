import React from 'react';
import '../../assets/css/main.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function LoginWrapper(props) {
  return (
    <>
    <header>
    <div className="container">
      <div className="header-block">
        <Link to="/home" className="logo">
          Music
          <span>
            <FontAwesomeIcon icon={faMusic} />
          </span>
        </Link>
        <form className="search-box" action="#" required>
          <span className="search-icone">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input type="search" />
          <a href="#"></a>
        </form>
        <div className="signin-box">
          <Link to="/sign-up" className="sign-up">
            Sign up
          </Link>
          <Link to="/login" className="sign-btn">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  </header>
  {props.children}
  </>
  )
}

export default LoginWrapper;