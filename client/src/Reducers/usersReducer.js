//USER Reducer defaults
const userReducerDefaults = {
  name: "",
  lastname: "",
  number: null,
  createdAt: "",
  token: "",
  isSignedIn: false,
};

//USERS reducer
const userReducer = (state = userReducerDefaults, action) => {
  switch (action.type) {
    case "ADD_USER_LOGIN_DATA":
      return {
        ...state,
        name: action.payload.name,
        lastname: action.payload.lastname,
        number: action.payload.number,
        createdAt: action.payload.createdAt,
        token: action.payload.token,
        isSignedIn: true,
      };

    case "SET_CURRENT_USER":
      return {
        ...state,
        name: action.name,
        lastname: action.lastname,
        number: action.number,
        createdAt: action.createdAt,
        token: action.token,
        isSignedIn: true,
      };

    case "USER_LOG_OUT":
      return {
        name: "",
        lastname: "",
        number: null,
        createdAt: "",
        token: "",
        isSignedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
