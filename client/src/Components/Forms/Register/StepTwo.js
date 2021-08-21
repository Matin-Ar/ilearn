import React, { useState } from "react";
import { connect } from "react-redux";

//comp imports
import ProgressBar from "./ProgressBar";
import { startStepThree } from "../../../Actions/RegisterActions";

export function StepTwo({ phoneNum, dispatch }) {
  const [fname, setFname] = useState("");
  const [lastName, setLastName] = useState("");
  const [verificationCode, setVerificationCode] = useState(null);

  const handleNextStep = (e) => {
    e.preventDefault();

    if (fname && lastName && verificationCode && phoneNum) {
      dispatch(startStepThree({ fname, lastName, verificationCode, phoneNum }));
    }
  };

  return (
    <div>
      <ProgressBar />
      <div className="register-steptwo">
        <h1 className="register-steptwo__title">ثبت نام</h1>

        <label htmlFor="fname" className="register-steptwo__lable">
          نام
        </label>
        <input
          value={fname}
          type="text"
          id="fname"
          name="fname"
          className="register-steptwo__input"
          onChange={(e) => setFname(e.target.value)}
          required
        ></input>

        <label htmlFor="lastName" className="register-steptwo__lable">
          نام خانوادگی
        </label>
        <input
          value={lastName}
          className="register-steptwo__input"
          type="text"
          id="lastName"
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          required
        ></input>

        <label htmlFor="activationCode" className="register-steptwo__lable">
          کد تایید -{" "}
          <span className="register-steptwo__lable__span">تغییر شماره</span>
        </label>
        <input
          className="register-steptwo__input"
          type="text"
          id="activationCode"
          name="activationCode"
          pattern="\d*"
          maxLength="4"
          value={verificationCode}
          placeholder={`کد تایید به شماره ${phoneNum} ارسال شد`}
          onChange={(e) => setVerificationCode(e.target.value)}
          required
        ></input>

        <button
          className="register-steptwo__button"
          type="submit"
          onClick={(e) => handleNextStep(e)}
        >
          مرحله بعد
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    phoneNum: state.registeration.number,
  };
};

export default connect(mapStateToProps)(StepTwo);
