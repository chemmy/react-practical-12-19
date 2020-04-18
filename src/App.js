import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import UsersList from './components/Users/UsersList';
import User from './components/Users/User';
import Post from './components/Posts/Post';

function App() {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={UsersList} />
          <Route path='/users/:id' exact component={User} />
          <Route path='/posts/:id' exact component={Post} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
