import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import UsersList from "./components/Users/UsersList";
import User from "./components/Users/User";
import Post from "./components/Posts/Post";
import UserCreatePost from "./components/Users/UserCreatePost";

export function AppRoutes() {
  return (
    <div className="body">
      <Route path="/" exact component={UsersList} />
      <Route path="/users/:id" exact component={User} />
      <Route path="/posts/:id" exact component={Post} />
      <Route path="/users/:id/create-post" exact component={UserCreatePost} />
    </div>
  );
}

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
