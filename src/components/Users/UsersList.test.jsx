import React from "react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import * as userActions from "../../actions/userActions";
import UsersList from "./UsersList";
import { GET_USERS } from "../../actions/types";

jest.mock("../../actions/userActions");
const mockStore = configureStore([]);

describe("Redux - UsersList", () => {
  let store;
  const users = [
    {
      id: 1,
      name: "Yang Wenli",
      email: "ywenli@gmail.com",
      company: { name: "Alliance " },
    },
    {
      id: 2,
      name: "Julian Minci",
      email: "jminci@gmail.com",
      company: { name: "Alliance " },
    },
    {
      id: 3,
      name: "Wolfgang Mittermeyer",
      email: "jminci@gmail.com",
      company: { name: "Dynasty " },
    },
  ];

  beforeEach(() => {
    store = mockStore({ user: { users } });
    userActions.getUsers.mockImplementation(() => ({
      type: GET_USERS,
    }));
  });

  it("should render number of users based on user store", () => {
    const { queryAllByTestId } = render(
      <Provider store={store}>
        <UsersList />
      </Provider>,
      { wrapper: MemoryRouter }
    );

    const userItems = queryAllByTestId("user-list-item");
    expect(userItems.length).toBe(users.length);
  });
});
