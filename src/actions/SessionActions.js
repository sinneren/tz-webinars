import axios from "axios";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

const URL = "https://mysterious-reef-29460.herokuapp.com/api/v1/";

export function logIn(params, cb) {
  return dispatch => {
    axios
      .post(URL + "validate", {
        email: params.email,
        password: params.password
      })
      .then(response => {
        if (response.data.status === "ok") {
          dispatch({
            type: LOG_IN,
            payload: {
              id: response.data.data.id,
              status: response.data.status
            }
          });
          cb();
        } else {
          dispatch({
            type: LOG_IN_FAILURE,
            payload: {
              status: response.status,
              errorMsg: response.message
            },
            error: true
          });
        }
      })
      .catch(response => {
        dispatch({
          type: LOG_IN_FAILURE,
          payload: {
            status: "err",
            errorMsg: "Непредвиденная ошибка. Сервер не доступен"
          },
          error: true
        });
      });
  };
}

export function logOut() {
  return {
    type: LOG_OUT
  };
}
