import { 
  GET_USERS, 
  GET_USER,
  GET_USER_POSTS,
  DELETE_USER_POST,
  SET_LOADING,
  CREATE_USER_POST,
} from '../actions/types';

const INITIAL_STATE = {
  users: [],
  current: {},
  posts: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, current: action.payload, loading: false };
    case GET_USER_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case CREATE_USER_POST:
      return { 
        ...state, 
        posts: [...state.posts, action.payload], 
        loading: false 
      };
    case DELETE_USER_POST:
      return { 
        ...state, 
        posts: state.posts.filter(post => post.id !== action.payload),
        loading: false
      }
    default:
      return state;
  }
};
