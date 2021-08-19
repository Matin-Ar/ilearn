import axios from "axios";

//Register Actions

//Next Step
export const setNextStep = (payload) => ({
  type: "NEXT_REGISTER_STEP",
  payload,
});

//Next Step
export const setPrevStep = (payload) => ({
  type: "PREV_REGISTER_STEP",
  payload,
});

//start step 2

export const startStepTwo = () => (number) => {
  axios
    .post("/api/activation/sendcode", number)
    .then((res) => console.log(res.data));
};
