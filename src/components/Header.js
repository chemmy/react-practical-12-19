import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/' className='item'>Assessment: Section 12 -19</Link>
    </div>
  )
}
