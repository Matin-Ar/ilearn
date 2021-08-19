import React, { useState, useEffect } from "react";

import StepOne from "./StepOne";

function Register() {
  const [registerFrom, setRegisterForm] = useState({
    mobile: undefined,
    fname: undefined,
    sureName: undefined,
    activationCode: null,
  });
  return (
    <div className="registerpage-wrapper">
      <StepOne />
      {/* <form className="registerpage-wrapper">
        <label htmlFor="mobile">شماره موبایل</label>
        <input type="text" id="mobile" name="mobile"></input>

        <label htmlFor="fname">نام</label>
        <input type="text" id="fname" name="fname"></input>

        <label htmlFor="sureName">نام خانوادگی</label>
        <input type="text" id="sureName" name="sureName"></input>

        <label htmlFor="activationCode">کد تایید</label>
        <input type="text" id="activationCode" name="activationCode"></input>
      </form> */}
    </div>
  );
}

export default Register;
