import React from "react";
import CoursesDropdown from "../Button/CoursesDropdown";
import LoginBtn from "../Button/LoginBtn";
import RegisterBtn from "../Button/RegisterBtn";
import Logo from "./Logo";

function Header() {
  return (
    <div className="main-menu-container">
      <div className="main-menu__logo-dropdown-container">
        <Logo />
        <CoursesDropdown />
      </div>

      <div className="main-menu__login-register-container">
        <LoginBtn />
        <RegisterBtn />
      </div>
    </div>
  );
}

export default Header;
