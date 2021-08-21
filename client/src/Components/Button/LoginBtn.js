import React from "react";
import { Link } from "react-router-dom";

function LoginBtn() {
  return (
    <div>
      <Link to="/Login">
        <button className="btn purplebtn">ورود</button>
      </Link>
    </div>
  );
}

export default LoginBtn;
