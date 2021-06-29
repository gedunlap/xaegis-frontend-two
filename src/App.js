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
  const url = "https://xaegis-backend-two-gd.herokuapp.com/posts/";
  // State to hold Posts
  const [posts, setPosts] = useState([]);
  // Null post
  const nullPost = {
    name: "",
    contact: "",
    sport: "",
    desc: "",
    image: "",
    video: "",
  }
  // State to hold Post edit
  const [targetPost, setTargetPost] = useState(nullPost)

  // ----- Functions -----

  // Function to get Posts from API
  const getPosts = async () => {
    const response = await fetch(url);
    const data = await response.json()
    setPosts(data)
  }

  // Funtion to add post from form data
  const addPosts = async (newPost) => {
    const response =  await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify(newPost),
    })
    getPosts()
    props.history.push("/PostIndex")
  }

  // Function to select Post
  const getTargetPost = (post) => {
    setTargetPost(post)
    props.history.push("/edit")
  }

  // Function to edit post on form submission
  const updatePost = async (post) => {
    const response = await fetch(url + post.id + "/", {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(post)
    })
    getPosts()
  }

  const deletePost = async (post) => {
    const response = await fetch(url + post.id, {
      method: "delete",
    })
    getPosts()
    props.history.push("/PostIndex")
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
            <PostShow 
              {...routerProps} 
              posts={posts} 
              edit={getTargetPost}
              deletePost={deletePost} 
            />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
            <Form 
              {...routerProps}
              initialPost={nullPost}
              handleSubmit={addPosts}
              buttonLabel="Create Post" 
              h1Label="Create A New Post"
            />
          )}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
            <Form
               {...routerProps}
               initialPost={targetPost}
               handleSubmit={updatePost}
               buttonLabel="Update"
               h1Label="Update This Post"
            />
          )}
        />
      </Switch>
    </div>
  );
}


export default App;
