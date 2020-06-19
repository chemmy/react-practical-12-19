import fakeapi from "../apis/fakeapi";
import { getPost, getPostComments } from "./postActions";
import { GET_POST, GET_POST_COMMENTS } from "./types";

jest.mock("../apis/fakeapi");

describe("postActions", () => {
  let dispatch;
  const data = { message: "ok" };
  beforeEach(() => {
    dispatch = jest.fn();
    fakeapi.get.mockImplementation(() => Promise.resolve({ data }));
  });

  test("should call fake api and dispatch when getPost is called", async () => {
    await getPost(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: GET_POST, payload: data });
  });

  test("should call fake api and dispatch when getPostComments is called", async () => {
    await getPostComments(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_POST_COMMENTS,
      payload: data,
    });
  });
});
