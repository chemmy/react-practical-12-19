import { GET_POST, GET_POST_COMMENTS } from "../actions/types";

const INITIAL_STATE = {
  post: {},
  comments: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, post: action.payload };
    case GET_POST_COMMENTS:
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};
