import { LOAD_NEWS, LOAD_FAIL } from "../actions/NewsActions";

const initialState = {
  data: [],
  errorMsg: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS:
      return {
        ...state,
        data: action.payload.data,
        errorMsg: ""
      };
    case LOAD_FAIL:
      return {
        ...state,
        errorMsg: action.payload.errorMsg
      };
    default:
      return state;
  }
};
