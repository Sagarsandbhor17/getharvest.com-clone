// import { AUTH_POSTDATA, AUTH_SUCCESS } from "./auth.type";
// import axios from "axios";

// export const Logins = (data) => async (dispatch) => {
//   console.log(data);
//   try {
//     let response = await axios.post("http://localhost:8080/signin", data);

//     console.log(response);
//     dispatch({ type: AUTH_SUCCESS, payload: response.data.token });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const SignUp = (data) => async (dispatch) => {
//   console.log(data);
//   try {
//     let response = await axios.post("http://localhost:8080/signup", data);

//     console.log(response);
//   } catch (err) {
//     console.log(err);
//   }
// };