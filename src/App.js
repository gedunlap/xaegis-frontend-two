import Home from "./pages/Home";
import PostIndex from "./pages/PostIndex";
import PostShow from "./pages/PostShow";
import Form from "./pages/Form";
import Nav from "./components/Nav";
// Import React and hooks
import React, { useState, useEffect } from "react";
// Import components from React Router
import {Route, Switch} from 'react-router-dom';


function App(props) {

  const url = "https://xaegis-backend-two-gd.herokuapp.com";

  const [posts, setPosts] = useState([]);

  return (
    <div>
      <Nav />
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <Home {...routerProps} posts={posts} />}
        />
        <Route
          path="/posts"
          render={(routerProps) => (
            <PostIndex {...routerProps} posts={posts} />
          )}
        />
        <Route
          path="/post/:id"
          render={(routerProps) => (
            <PostShow {...routerProps} posts={posts} />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps} />}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch>
    </div>
  );
}


export default App;
