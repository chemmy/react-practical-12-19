import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { getPost, getPostComments } from "../../actions/postActions";
import PostComment from "./PostComment";

function Post({ post, comments, getPost, getPostComments }) {
  const match = useRouteMatch();
  useEffect(() => {
    const postId = match.params.id;
    getPost(postId);
    getPostComments(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  return (
    <div className="post" data-testid="post">
      <div className="ui piled segment">
        <div className="ui header">{post.title}</div>
        <p>{post.body}</p>
      </div>
      <h4 className="header">COMMENTS</h4>
      <div className="ui comments">
        {comments.map((comment, idx) => (
          <PostComment key={idx} comment={comment} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  post: state.post.post,
  comments: state.post.comments,
});

export default connect(mapStateToProps, { getPost, getPostComments })(Post);
