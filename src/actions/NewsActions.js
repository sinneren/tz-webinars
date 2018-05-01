import axios from "axios";

export const LOAD_NEWS = "LOAD_NEWS";
export const LOAD_FAIL = "LOAD_FAIL";

const URL = "https://mysterious-reef-29460.herokuapp.com/api/v1/news";

export function requestNews(data) {
  return {
    type: LOAD_NEWS,
    payload: {
      data: data,
      errorMsg: ""
    }
  };
}
export function loadNews() {
  return dispatch => {
    axios
      .get(URL)
      .then(response => {
        if (response.data.status === "ok") {
          dispatch(requestNews(response.data.data));
        } else {
          dispatch({
            type: LOAD_FAIL,
            payload: {
              data: [],
              errorMsg: "Что-то пошло не так"
            }
          });
        }
      })
      .catch(response => {
        dispatch({
          type: LOAD_FAIL,
          payload: {
            news: [],
            errorMsg: "Непредвиденная ошибка. Сервер не доступен"
          },
          error: true
        });
      });
  };
}
