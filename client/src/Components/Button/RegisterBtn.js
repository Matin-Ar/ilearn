import React from "react";
import { Link } from "react-router-dom";

function RegisterBtn() {
  return (
    <Link to="/Register">
      <button className="btn greenbtn">ثبت نام</button>
    </Link>
  );
}

export default RegisterBtn;
