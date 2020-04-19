import fakeapi from '../apis/fakeapi';
import { GET_USERS, GET_USER } from './types';

export const getUsers = () => async dispatch => {
  const res = await fakeapi.get(`/users`);

  dispatch({
    type: GET_USERS,
    payload: res.data,
  });
};

export const getUser = id => async dispatch => {
  const res = await fakeapi.get(`/users/${id}`);

  dispatch({
    type: GET_USER,
    payload: res.data,
  });
};