import React from "react";
import { connect } from "react-redux";

//import assets
import { ReactComponent as Step1Img } from "../../../Assets/Svg/Step1-ast.svg";
import { ReactComponent as Step2Img } from "../../../Assets/Svg/Step2-ast.svg";
import { ReactComponent as Step3Img } from "../../../Assets/Svg/Step3-ast.svg";
import { ReactComponent as Step4Img } from "../../../Assets/Svg/Step4-ast.svg";

export function ProgressBar({ step }) {
  return (
    <>
      <div className="register-progressbar">
        {step === 1 && <Step1Img className="register-progressbar__step1img" />}
        {step === 2 && <Step2Img className="register-progressbar__step2img" />}
        {step === 3 && <Step3Img className="register-progressbar__step3img" />}
        {step === 4 && <Step4Img className="register-progressbar__step4img" />}
      </div>
      <p className="register-progressbar__text">مرحله {step} از 3</p>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    step: state.registeration.step,
  };
};

export default connect(mapStateToProps)(ProgressBar);
