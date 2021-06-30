import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

// destructure props to get post
const PostShow = ({posts, match, edit, deletePost}) => {
    const id = parseInt(match.params.id) // get post id from url param
    const post = posts.find((post) => post.id === id)

    return (
        <div className="showpage">
            <div className="row twelve columns showtop">
                <div className="six columns">
                    <img className="showimg" src={post?.image} alt={post?.name} />
                </div>
                <div className="six columns showname" className="showname">
                    <h1>{post?.name}</h1>
                    <h2>{post?.sport}</h2>
                    <h4>{post?.contact}</h4>
                </div>
            </div>
            <div className="row twelve columns showdesc">
                <div className="eight columns">
                    <h4>{post?.desc}</h4>
                </div>
            </div>
            <div className="row twelve columns showvideo">
                <ReactPlayer url={post?.video} controls={true} />
            </div>
            <div className="row twelve columns showbuttons">
                <div>
                    <button  className="button-primary" id="showbutton" onClick={(event) => edit(post)}>Edit</button>
                    <button  className="button" id="showbutton" style={{backgroundColor:"red", color:"white"}} onClick={(event) => deletePost(post)}>Delete</button>
                </div>
                <div>
                    <Link to="/PostIndex"><button id="showbutton" className="button-primary">Back</button></Link>
                </div>
            </div>
        </div>
    )
}

export default PostShow;