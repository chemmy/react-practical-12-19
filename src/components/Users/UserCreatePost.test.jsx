import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { UserCreatePost } from "./UserCreatePost";

describe("<UserCreatePost />", () => {
  const postTitle = "New Post";
  const postBody = "A sample post body";
  const createUserPost = jest.fn();

  const setup = () => {
    return render(<UserCreatePost createUserPost={createUserPost} />, {
      wrapper: MemoryRouter,
    });
  };

  describe("renders", () => {
    test("should render form without error", () => {
      const { queryAllByTestId } = setup();
      const createForm = queryAllByTestId("user-create-post");
      expect(createForm.length).toBe(1);
    });

    test("should render fields", () => {
      const { queryAllByTestId } = setup();
      const titleField = queryAllByTestId("title");
      const bodyField = queryAllByTestId("body");
      expect(titleField.length).toBe(1);
      expect(bodyField.length).toBe(1);
    });
  });

  describe("state-controlled fields", () => {
    test("should update title value", () => {
      const { queryByTestId } = setup();
      const titleField = queryByTestId("title");
      expect(titleField).not.toBeNull();

      userEvent.type(titleField, postTitle);
      expect(titleField.value).toEqual(postTitle);
    });

    test("should update title value", () => {
      const { queryByTestId } = setup();
      const bodyField = queryByTestId("body");
      expect(bodyField).not.toBeNull();

      userEvent.type(bodyField, postBody);
      expect(bodyField.value).toEqual(postBody);
    });
  });

  describe("submission", () => {
    test("should on submit", () => {
      const { queryByTestId } = setup();
      const titleField = queryByTestId("title");
      const bodyField = queryByTestId("body");
      const submitButton = queryByTestId("submit");
      expect(submitButton).not.toBeNull();

      userEvent.type(titleField, postTitle);
      userEvent.type(bodyField, postBody);
      userEvent.click(submitButton);

      const newPostObject = { title: postTitle, body: postBody };
      expect(createUserPost).toHaveBeenCalledWith(newPostObject);
    });
  });
});
