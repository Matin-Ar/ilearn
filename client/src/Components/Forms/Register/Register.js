import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

export function Register({ step }) {
  const [registerFrom, setRegisterForm] = useState({
    mobile: undefined,
    fname: undefined,
    sureName: undefined,
    activationCode: null,
  });
  return (
    <div className="registerpage-wrapper">
      {step === 1 && <StepOne />}
      {step === 2 && <StepTwo />}
      {step === 3 && <StepThree />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    step: state.registeration.step,
  };
};

export default connect(mapStateToProps)(Register);
