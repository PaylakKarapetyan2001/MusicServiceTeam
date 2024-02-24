import React from "react";
import '../assets/css/main.scss';
import Header from "./header/Header";

function Wrapper(props) {
  return (
    <>
      <Header />
         {props.children}
    </>
  );
}

export default Wrapper;
