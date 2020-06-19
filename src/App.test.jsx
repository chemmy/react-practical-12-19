import React from "react";
import configureStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import * as userActions from "./actions/userActions";
import * as postActions from "./actions/postActions";
import {
  GET_USERS,
  GET_USER,
  GET_USER_POSTS,
  GET_POST,
  GET_POST_COMMENTS,
} from "./actions/types";
import { AppRoutes } from "./App";

jest.mock("./actions/userActions");
jest.mock("./actions/postActions");
const mockStore = configureStore([]);

describe("App Routing", () => {
  let store;
  const users = [
    { id: 1, name: "Yang Wenli", company: { name: "Alliance " } },
    { id: 2, name: "Julian Minci", company: { name: "Alliance " } },
  ];

  beforeEach(() => {
    store = mockStore({
      user: { users, posts: [], current: {} },
      post: { post: {}, comments: [] },
    });

    userActions.getUsers.mockImplementation(() => ({
      type: GET_USERS,
    }));
    userActions.getUser.mockImplementation(() => ({ type: GET_USER }));
    userActions.getUserPosts.mockImplementation(() => ({
      type: GET_USER_POSTS,
    }));

    postActions.getPost.mockImplementation(() => ({ type: GET_POST }));
    postActions.getPostComments.mockImplementation(() => ({
      type: GET_POST_COMMENTS,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render UsersList component base url", async () => {
    const { findByTestId } = render(
      <Provider store={store}>
        <AppRoutes />
      </Provider>,
      {
        wrapper: MemoryRouter,
      }
    );
    expect(await findByTestId("users-list")).not.toBeNull();
  });

  test("sets the screen to User component for /users/id path", async () => {
    const userPath = `/users/1`;

    const { findByTestId } = render(
      <MemoryRouter initialEntries={[userPath]}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </MemoryRouter>
    );
    expect(await findByTestId("user-profile")).not.toBeNull();
  });

  test("sets the screen to Post component for /posts/id path", async () => {
    const postPath = `/posts/1`;

    const { findByTestId } = render(
      <MemoryRouter initialEntries={[postPath]}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </MemoryRouter>
    );
    expect(await findByTestId("post")).not.toBeNull();
  });

  test("sets the screen to UserCreatePost component for /users/id/create-post path", async () => {
    const createPostPath = `/users/1/create-post`;

    const { findByTestId } = render(
      <MemoryRouter initialEntries={[createPostPath]}>
        <Provider store={store}>
          <AppRoutes />
        </Provider>
      </MemoryRouter>
    );
    expect(await findByTestId("user-create-post")).not.toBeNull();
  });
});
