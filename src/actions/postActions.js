import fakeapi from '../apis/fakeapi';
import { GET_POSTS } from './types';

export const getPosts = (userId) => async dispatch => {
  const res = await fakeapi.get(`/users/${userId}/posts`);

  dispatch({
    type: GET_POSTS,
    payload: res.data,
  });
};