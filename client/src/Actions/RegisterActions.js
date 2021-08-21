import axios from "axios";

import { startAddAlert } from "./NotificationActions";

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
        dispatch(startAddAlert("success", "helooooo"));
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
          dispatch(setNextStep(3));
        }
      });
  };
