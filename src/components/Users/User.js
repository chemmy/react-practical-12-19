import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../actions/userActions';
import { getPosts } from '../../actions/postActions';
import Post from '../Posts/PostItem';

function User({ user, posts, getUser, getPosts }) {
  const { name } = user;

  const match = useRouteMatch();
  useEffect(() => {
    const userId = match.params.id;
    getUser(userId);
    getPosts(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  return (
    <div className='user-profile'>
      <h2 className='ui header'>{ name } Posts</h2>
      <div className='posts ui cards'>
        {
          posts.map((post, idx) => <Post key={idx} post={post} />)
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user.currentUser,
  posts: state.post.posts,
})

export default connect(mapStateToProps, { getUser, getPosts })(User)