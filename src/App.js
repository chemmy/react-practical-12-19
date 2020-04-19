import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import Post from './components/Posts/Post';
import UserCreatePost from './components/Users/UserCreatePost';

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <Header />
        <div className='body'>
          <Route path='/' exact component={UsersList} />
          <Route path='/users/:id' exact component={User} />
          <Route path='/posts/:id' exact component={Post} />
          <Route path='/users/:id/create-post' exact component={UserCreatePost} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
