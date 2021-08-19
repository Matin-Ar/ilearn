import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import validator from "validator";

//comp imports
import ProgressBar from "./ProgressBar";

//import Actions
import { startStepTwo } from "../../../Actions/RegisterActions";
import { setPrevStep } from "../../../Actions/RegisterActions";

export function StepOne({ state, dispatch }) {
  const [phoneNum, SetPhoneNum] = useState(null);

  const handleNextStep = (e) => {
    if (phoneNum !== null && validator.isMobilePhone(phoneNum, ["fa-IR"]))
      dispatch(startStepTwo(phoneNum));
    console.log("phone is valid");
  };

  return (
    <div>
      <ProgressBar />
      <div className="register-stepone">
        <h1 className="register-stepone__title">ثبت نام</h1>
        <label className="register-stepone__lable">شماره موبایل</label>
        <input
          className="register-stepone__input"
          type="number"
          placeholder="لطفا شماره موبایل خود را وارد نمایید"
          onChange={(e) => SetPhoneNum(e.target.value)}
        ></input>
        <button
          className="register-stepone__button"
          onClick={(e) => handleNextStep(e)}
        >
          مرحله بعد
        </button>
        <p className="register-stepone__paragraph">
          قبلا عضو شده اید؟{" "}
          <span className="register-stepone__span">
            <Link to="/Login">وارد شوید</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default connect()(StepOne);
