import axios from "axios";

import { startAddAlert } from "./NotificationActions";
import { startAddUserLoginData } from "./UserActions";

//Register Actions

//Next Step
export const setNextStep = (payload) => ({
  type: "NEXT_REGISTER_STEP",
  payload,
});

//Prev Step
export const setPrevStep = (payload) => ({
  type: "PREV_REGISTER_STEP",
  payload,
});

//setphoneNum Step
export const setphoneNum = (payload) => ({
  type: "SET_PHONE_NUM",
  payload,
});

//set reg data
export const setRegData = ({ fname, lastName, verificationCode }) => ({
  type: "SET_REG_DATA",
  fname,
  lastName,
  verificationCode,
});

//start step 2
export const startStepTwo = (number) => (dispatch) => {
  dispatch(setphoneNum(number));
  axios
    .post("/api/activation/sendcode", { number })
    .then((res) => {
      if (res.status === 200) {
        dispatch(startAddAlert("success", "کد با موفقیت ارسال شد"));
        dispatch(setNextStep(2));
      }
      console.log("this is from start step 2 ", res.data);
    })
    .catch((error) => {
      console.log(error.response.data.error);

      dispatch(startAddAlert("error", error.response.data.error));
    });
};

//start step 3
export const startStepThree =
  ({ fname, lastName, verificationCode, phoneNum }) =>
  (dispatch) => {
    dispatch(setRegData({ fname, lastName, verificationCode }));

    axios
      .post("/api/users/signup", {
        name: fname,
        lastname: lastName,
        code: verificationCode,
        number: phoneNum,
      })
      .then((res) => {
        if (res.status === 201) {
          console.log(res.data);
          localStorage.setItem("jwtToken", res.data.token);
          dispatch(startAddUserLoginData(res.data.token, res.data.user));
          dispatch(setNextStep(3));
        }
      });
  };
