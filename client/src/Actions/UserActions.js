import axios from "axios";

//USER Actions

export const addUserLoginData = (payload) => ({
  type: "ADD_USER_LOGIN_DATA",
  payload,
});

export const startAddUserLoginData =
  (token, { createdAt, lastname, name, number, updatedAt }) =>
  (dispatch) => {
    localStorage.setItem("jwtToken", token);
    dispatch(
      addUserLoginData({ token, createdAt, lastname, name, number, updatedAt })
    );
  };

export const SetCurrentUser = (
  token,
  { name, lastname, number, createdAt }
) => ({
  type: "SET_CURRENT_USER",
  name,
  lastname,
  number,
  createdAt,
  token,
});

export const startSetCurrentUser = () => (dispatch) => {
  axios.get("/api/users/me").then(
    (resp) => {
      const token = localStorage.getItem("jwtToken");
      dispatch(SetCurrentUser(token, resp.data));
      console.log(resp);
    },
    (error) => console.log("there was a error in setting current user", error)
  );
};

// //USER_LOGOUT
// export const userLogOut = () => ({
//   type: "USER_LOG_OUT",
// });

// //StartUSERLOGOUT
// export const startUserLogOut = (token) => (dispatch) => {
//   const axiosAuth = axios.create({
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });

//   axios.post("/api/users/logout");
//   setAutherizationToken();
//   localStorage.removeItem("jwtToken");

//   return axiosAuth.post("/api/users/logout").then(
//     () => console.log("user logged out"),
//     (e) => console.log("there was a error logging out")
//   );
// };
