import React from 'react'

export default function PostComment({ comment }) {
  const { name, email, body } = comment;
  return (
    <div className='comment'>
      <div className='content'>
        <span className='author'>{name}</span>
        <div className='metadata'>Posted by {email}</div>
        <div className='text'>{body}</div>
      </div>
    </div>
  )
}
