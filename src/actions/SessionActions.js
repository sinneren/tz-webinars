import { checkCredentials } from "../helpers/session";
import axios from "axios";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const URL = "http://5ae32aeb34b5970014d2edd6.mockapi.io/";

export function logIn(params, cb) {
  return dispatch => {
    if (checkCredentials(params)) {
      axios.post(URL + "validate-ok").then(response => {
        dispatch({
          type: LOG_IN,
          payload: {
            id: response.data.userId,
            status: response.data.status
          }
        });
        cb();
      });
    } else {
      axios.post(URL + "validate-err").then(response => {
        dispatch({
          type: LOG_IN_FAILURE,
          payload: {
            status: response.data.status,
            errorMsg: response.data.message
          },
          error: true
        });
      });
    }
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}
