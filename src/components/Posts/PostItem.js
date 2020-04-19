import React from 'react'

export default function Post({ post }) {
  const { title, body } = post
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='description'>{body}</div>
      </div>
      <div className='extra-content'>
        <div className='ui two buttons'>
          <div className='ui basic green button'>View</div>
          <div className='ui basic red button'>Delete</div>
        </div>
      </div>
    </div>
  )
}
