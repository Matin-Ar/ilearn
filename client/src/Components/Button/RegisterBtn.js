import React from "react";
import { Link } from "react-router-dom";

function RegisterBtn() {
  return (
    <Link to="/register">
      <button className="btn greenbtn">ثبت نام</button>
    </Link>
  );
}

export default RegisterBtn;
