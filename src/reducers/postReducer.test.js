import postReducer from "./postReducer";
import { GET_POST, GET_POST_COMMENTS } from "../actions/types";

describe("postReducer", () => {
  const initial = { loading: false };

  test("should still retain other properties of state", () => {
    const post = "My new post";
    const actual = postReducer(initial, { type: GET_POST, payload: post });
    expect(actual).toEqual({ ...initial, post });
  });

  test("should update post when action type is GET_POST", () => {
    const post = "My new post";
    const actual = postReducer({}, { type: GET_POST, payload: post });
    expect(actual).toEqual({ post });
  });

  test("should update commments when action type is GET_POST_COMMENTS", () => {
    const comments = ["Comment 1", "Comment 2"];
    const actual = postReducer(
      {},
      { type: GET_POST_COMMENTS, payload: comments }
    );
    expect(actual).toEqual({ comments });
  });

  test("should return initial state if action type is not an expected value", () => {
    const post = "My new post";
    const actual = postReducer(initial, { type: "Other", payload: post });
    expect(actual).toEqual(initial);
  });
});
