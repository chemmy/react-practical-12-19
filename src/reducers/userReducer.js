import { GET_USERS, GET_USER } from '../actions/types';

const INITIAL_STATE = {
  users: [],
  currentUser: {},
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};