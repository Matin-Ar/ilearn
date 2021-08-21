import React from "react";
import { Link } from "react-router-dom";

//comp imports
import ProgressBar from "./ProgressBar";
import { ReactComponent as Step4Img } from "../../../Assets/Svg/Step4-ast.svg";

function StepThree() {
  return (
    <div>
      <ProgressBar />
      <div className="register-stepthree">
        <h1 className="register-stepthree__title">به خانواده ما خوش آمدید!</h1>
        <h1 className="register-stepthree__title">
          ثبت نام شما با موفقیت انجام شد
        </h1>
        <Link className="register-stepthree__btn__wrapper" to="/">
          <button className="btn register-stepthree__button">بزن بریم</button>
        </Link>
        <Step4Img className="register-stepthree__svg" />
      </div>
    </div>
  );
}

export default StepThree;
