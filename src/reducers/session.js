import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from "../actions/SessionActions";

const initialState = {
  user: null,
  status: null,
  id: null,
  errorMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: {
          status: action.payload.status,
          id: action.payload.id
        },
        errorMsg: ""
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMsg: ""
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        status: action.payload.status,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
};
