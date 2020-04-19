import React from 'react';
import { Link } from 'react-router-dom';

export default function UsersListItem({ user }) {
  const { id, name, company, email } = user;

  return (
    <Link to={`/users/${id}`} className='item'>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{company.name}</div>
      </div>
      <div className="ui tiny image">
        <img 
          className="image left floated" 
          src={`https://api.adorable.io/avatars/100/${email}`}
          alt={name}
        />
      </div>
    </Link>
  )
}
