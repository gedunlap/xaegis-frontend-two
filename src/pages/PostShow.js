import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

// destructure props to get post
const PostShow = ({posts, match}) => {
    const id = parseInt(match.params.id) // get post id from url param
    const post = posts.find((post) => post.id === id)

    return (
        <div>
            <h1>{post?.name}</h1>
            <img src={post?.image} alt={post?.name} />
            <h2>{post?.sport}</h2>
            <h4>{post?.contact}</h4>
            <h4>{post?.desc}</h4>
            <ReactPlayer url={post?.video} controls={true} />
            <Link to="/PostIndex"><button>Back</button></Link>
        </div>
    )
}

export default PostShow;