import fakeapi from '../apis/fakeapi';
import { 
  GET_USERS, 
  GET_USER,
  GET_USER_POSTS,
  SET_LOADING,
  CREATE_USER_POST,
  DELETE_USER_POST
} from './types';

export const getUsers = () => async dispatch => {
  dispatch({ type: SET_LOADING });
  const res = await fakeapi.get(`/users`);
  dispatch({ type: GET_USERS, payload: res.data });
};

export const getUser = id => async dispatch => {
  dispatch({ type: SET_LOADING });
  const res = await fakeapi.get(`/users/${id}`);
  dispatch({ type: GET_USER, payload: res.data });
};

export const getUserPosts = (userId) => async dispatch => {
  dispatch({ type: SET_LOADING });
  const res = await fakeapi.get(`/users/${userId}/posts`);
  dispatch({ type: GET_USER_POSTS, payload: res.data });
};

export const createUserPost = (post) => async dispatch => {
  dispatch({ type: SET_LOADING });
  await fakeapi.post('/posts', post);
  dispatch({ type: CREATE_USER_POST, payload: post });
};

export const deleteUserPost = (postId) => async dispatch => {
  dispatch({ type: SET_LOADING });
  await fakeapi.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_USER_POST, payload: postId });
};