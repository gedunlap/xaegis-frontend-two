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
  // API URL
  const url = "https://xaegis-backend-two-gd.herokuapp.com/posts";
  //State to hold Posts
  const [posts, setPosts] = useState([]);

  // ----- Functions -----

  // Function to get Posts from API
  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setPosts(data)
  }

  // ----- useEffects -----
  useEffect(() => {
    getPosts()
  }, [])

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
          path="/PostIndex"
          render={(routerProps) => <PostIndex {...routerProps} posts={posts} />}
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
