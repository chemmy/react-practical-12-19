import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, getUserPosts } from '../../actions/userActions';
import UserPosts from './UserPost';
import Loader from '../Loader';

function User({ user, posts, loading, getUser, getUserPosts }) {
  const [userId, setUserId] = useState(null);
  const { name } = user;

  const match = useRouteMatch();
  useEffect(() => {
    const userId = match.params.id;
    setUserId(userId);
    getUser(userId);
    getUserPosts(userId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  const renderDisplay = () => {
    return (
      <div className='user-profile'>
        <h2 className='ui header'>{ name } Posts</h2>
        <Link to={`/users/${userId}/create-post`} className='add-item'>Create New Post</Link>
        <div className='posts ui cards'>
          {
            posts.map((post, idx) => <UserPosts key={idx} post={post} />)
          }
        </div>
      </div>
    );
  };

  return (
    <>
      {loading ? <Loader /> : renderDisplay()}
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user.current,
  posts: state.user.posts,
  loading: state.user.loading,
})

export default connect(mapStateToProps, { getUser, getUserPosts })(User)