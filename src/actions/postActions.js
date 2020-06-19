import fakeapi from "../apis/fakeapi";
import { GET_POST, GET_POST_COMMENTS } from "./types";

export const getPost = (postId) => async (dispatch) => {
  const res = await fakeapi.get(`/posts/${postId}`);

  dispatch({
    type: GET_POST,
    payload: res.data,
  });
};

export const getPostComments = (postId) => async (dispatch) => {
  const res = await fakeapi.get(`/posts/${postId}/comments`);

  dispatch({
    type: GET_POST_COMMENTS,
    payload: res.data,
  });
};
