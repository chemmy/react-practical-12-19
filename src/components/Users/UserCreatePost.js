import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";
import { createUserPost } from "../../actions/userActions";

export function UserCreatePost({ createUserPost }) {
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const history = useHistory();
  const match = useRouteMatch();
  useEffect(() => {
    const userId = match.params.id;
    setUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  const onSubmit = () => {
    const newPost = { title, body: post, userId: userId };
    createUserPost(newPost);
    history.push(`/users/${userId}`);
  };

  return (
    <div className="ui form error" data-testid="user-create-post">
      <h3>Create New Post</h3>
      <div className="field">
        <label htmlFor="title">Enter title</label>
        <input
          id="title"
          data-testid="title"
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="post">Enter post body</label>
          <textarea
            id="post"
            data-testid="body"
            value={post}
            onChange={(e) => setPost(e.target.value)}
            required
          ></textarea>
        </div>
      </div>
      <button
        onClick={onSubmit}
        className="ui button primary"
        data-testid="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default connect(null, { createUserPost })(UserCreatePost);
