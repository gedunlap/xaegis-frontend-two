import React from 'react'
import { Link } from 'react-router-dom'

// destructure post from props

const Post = ({post}) => {
    return (
        <div className="four columns" id="singlepost">
            <Link to={`/post/${post.id}`}>
                <img className="postimg" src={post.image} alt={post.name} />
            </Link>
            <Link to={`/post/${post.id}`} style={{textDecoration:"none"}} className="indexlink"><h2>{post.name}</h2></Link>
            <h4>{post.sport}</h4>
        </div>
    )
}

export default Post;