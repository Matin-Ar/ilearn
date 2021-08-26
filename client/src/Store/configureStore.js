import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//imported reducers
// import usersReducer from "../Reducers/authentication";
// import errorsReducer from "../Reducers/errorsReducer";
import registerationReducer from "../Reducers/registrationReducer";
import notificationReducer from "../Reducers/notificationReducer";
import userReducer from "../Reducers/usersReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store Creation
  const store = createStore(
    combineReducers({
      //   errorMsg: errorsReducer,
      registeration: registerationReducer,
      notification: notificationReducer,
      Users: userReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
