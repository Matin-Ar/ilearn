import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { connect } from "react-redux";

//import actions
import { startAddAlert } from "../../../Actions/NotificationActions";

export function Login(props) {
  const [phoneNum, setPhoneNum] = useState("");
  const [  validationCode, setValidationCode] = useState("");

  const [disableBtn, setDisableBtn] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);

  const handleUserVerification = (e) => {
    e.preventDefault();
    setDisableBtn(true);

    if (validator.isMobilePhone(phoneNum, "fa-IR")) {
      axios
        .post("/api/verification/sendcode", { number: phoneNum })
        .then((res) => {
          console.log(res);
          props.dispatch(startAddAlert("success", res.data.message));
          setVerificationSent(true);
        })
        .catch((error) => console.log(error));
    } else {
      props.dispatch(startAddAlert("error", "شماره وارد شده صحیح نمی باشد"));
    }
  };

  const handleUserLogin = (e) => {
      if(validator.isLength(validationCode, ["min:0, max: 4"]))
  };

  return (
    <div className="loginpage-wrapper">
      <div className="login-wrapper">
        <h1 className="login__title">ورود</h1>
        {!verificationSent && (
          <>
            <label className="login__lable">شماره موبایل</label>
            <input
              className="login__input"
              type="number"
              placeholder="لطفا شماره موبایل خود را وارد نمایید"
              required
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              disabled={disableBtn}
            ></input>
            <button
              className="login__button"
              disabled={disableBtn}
              onClick={(e) => handleUserVerification(e)}
            >
              ارسال کد تایید
            </button>
          </>
        )}

        {verificationSent && (
          <>
            <label className="login__lable">کد تایید را وارد نمایید</label>
            <input
              className="login__verification_input"
              type="text"
              pattern="\d*"
              maxLength="4"
              minLength="4"
              placeholder={`کد تایید به شماره ${phoneNum} ارسال شد`}
              required
              onChange={e => setValidationCode(e.target.value)}
              value={validationCode}
            ></input>
            <button
              className="login__verification__button"
              disabled={!disableBtn}
              onClick={(e) => handleUserLogin()}
            >
              ارسال کد تایید
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default connect()(Login);
