import React from 'react'
import Post from '../components/Post'
import {Link} from 'react-router-dom'

const PostIndex = (props) => {
    
    const postItem = props.posts.map((post) => <Post post={post} key={post.id} />)
    return (
        <div className="postbox">
            <div>
                <Link to="/new" ><button className="button-primary" id="createbtn">Create New Post</button></Link>
            </div>
            <div className="postitem">
                {postItem}
            </div>
        </div>
    )
    

}

export default PostIndex;