import React from 'react'
import { Link } from 'react-router-dom'

// destructure post from props

const Post = ({post}) => {
    return (
        <div>
            <Link to={`/post/${post.id}`}>
                <h1><img src={post.image} alt={post.name} /></h1>
            </Link>
            <h2>{post.name}</h2>
        </div>
    )
}

export default Post;