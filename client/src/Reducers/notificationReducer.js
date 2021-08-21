//Registeration Data Reducer defaults
const notificationReducerDefaults = {
  notifications: [
    { type: "danger", message: "hello new notification", uuid: "abcd1234" },
  ],
};

//USERS reducer
const notificationReducer = (state = notificationReducerDefaults, action) => {
  switch (action.type) {
    case "ADD_ALERT":
      return {
        ...state,
        notifications: state.notifications.push(action.payload),
      };
    default:
      return state;
  }
};

export default notificationReducer;
