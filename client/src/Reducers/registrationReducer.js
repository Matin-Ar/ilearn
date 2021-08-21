//Registeration Data Reducer defaults
const registerationReducerDefaults = {
  fname: "",
  lastname: "",
  number: null,
  verificationCode: null,
  step: 1,
};

//USERS reducer
const registerationReducer = (state = registerationReducerDefaults, action) => {
  switch (action.type) {
    case "NEXT_REGISTER_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "PREV_REGISTER_STEP":
      return {
        ...state,
        step: state.step - 1,
      };

    case "SET_PHONE_NUM":
      return {
        ...state,
        number: action.payload,
      };

    case "SET_REG_DATA":
      return {
        ...state,
        fname: action.fname,
        lastname: action.lastName,
        verificationCode: action.verificationCode,
      };

    default:
      return state;
  }
};

export default registerationReducer;
