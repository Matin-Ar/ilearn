import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <h1 className="main-menu__logo">
      <Link to="/">دکترشو</Link>
    </h1>
  );
}

export default Logo;
