import React from "react";
import { connect } from "react-redux";

//import components
import CoursesDropdown from "../Button/CoursesDropdown";
import LoginBtn from "../Button/LoginBtn";
import RegisterBtn from "../Button/RegisterBtn";
import HambergurMenu from "./HambergurMenu";
import Logo from "./Logo";
import avatar from "../../Assets/avatar.png";
import { ReactComponent as CaretImg } from "../../Assets/Svg/caret.svg";
import { ReactComponent as BellImg } from "../../Assets/Svg/bell.svg";
import { ReactComponent as FlameWhiteImg } from "../../Assets/Svg/flameWhite.svg";
import { ReactComponent as RubyImg } from "../../Assets/Svg/ruby.svg";

export function Header(props) {
  return (
    <div className="main-menu-container">
      <div className="main-menu__logo-dropdown-container">
        <Logo />
        <CoursesDropdown />
      </div>

      {!props.isSignedIn && (
        <div className="main-menu__login-register-container">
          <LoginBtn />
          <RegisterBtn />
        </div>
      )}

      {props.isSignedIn && (
        <div className="main-menu__user-profile-container">
          <div className="main-menu__user-profile__avatar__container">
            <img className="main-menu__user-profile__avatar" src={avatar} />
            <p className="main-menu__user-profile__name">{props.userName}</p>
            <CaretImg className="main-menu__user-profile__caret" />
          </div>
          <div className="main-menu__user-profile__stats">
            <div className="main-menu__user-profile__bell-box">
              <BellImg />
              <div className="main-menu__user-profile__bell-notification">
                10
              </div>
            </div>
            <div className="main-menu__user-profile__ruby-box">
              <RubyImg />
              <div className="main-menu__user-profile__bell-notification">
                22
              </div>
            </div>
            <div className="main-menu__user-profile__fire-box">
              <FlameWhiteImg />
              <div className="main-menu__user-profile__bell-notification">
                3
              </div>
            </div>
          </div>
        </div>
      )}
      <HambergurMenu />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.Users.isSignedIn,
    userName: state.Users.name + " " + state.Users.lastname,
  };
};

export default connect(mapStateToProps)(Header);
