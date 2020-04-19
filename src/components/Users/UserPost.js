import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUserPost } from '../../actions/userActions';

function UserPost({ post, deleteUserPost }) {
  const { id, title, body } = post;
  
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='description'>{body}</div>
      </div>
      <div className='extra-content'>
        <div className='ui two buttons'>
          <span>{id}</span>
          <Link to={`/posts/${id}`}  className='ui basic green button'>View</Link>
          <div onClick={() => deleteUserPost(id)} className='ui basic red button'>Delete</div>
        </div>
      </div>
    </div>
  )
}

export default connect(null, { deleteUserPost })(UserPost);
