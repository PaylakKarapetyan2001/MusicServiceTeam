import React from "react";
import "../../assets/css/main.scss";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="notFount">
        <h1>404</h1>
        <h2>Not Fount</h2>
        <br />
        <br />
          <Link to="/home" className="sign-btn">Go home</Link>
      </div>
  );
}

export default NotFound;
