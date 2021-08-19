//Registeration Data Reducer defaults
const registerationReducerDefaults = {
  fname: "",
  lastname: "",
  number: null,
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

    default:
      return state;
  }
};

export default registerationReducer;
