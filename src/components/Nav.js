import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="row twelve columns" id="navbar">
        <Link to="/"><img src="https://i.imgur.com/Nuqv0mY.png" alt="" className="navlogo" id="navitem"/></Link>
        <Link to="/PostIndex" id="navitem">Gallery</Link>
        </div>
    )
}

export default Nav;