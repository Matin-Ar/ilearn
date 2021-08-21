//Notification Actions
import { v4 as uuidv4 } from "uuid";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";

//ADD ALERT Message
export const setAddAlert = (payload) => ({
  type: "ADD_ALERT",
  payload,
});

//startAddAlert
export const startAddAlert = (type, message) => (dispatch) => {
  const uuid = uuidv4();
  alertify[type](message);
};
