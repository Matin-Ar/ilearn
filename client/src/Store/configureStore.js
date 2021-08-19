import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//imported reducers
// import usersReducer from "../Reducers/authentication";
// import errorsReducer from "../Reducers/errorsReducer";
import registerationReducer from "../Reducers/registrationReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  //store Creation
  const store = createStore(
    combineReducers({
      //   errorMsg: errorsReducer,
      registeration: registerationReducer,
      //   user: usersReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
