import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <div id="navbar">
            <Link id="navitem" onClick={() => window.location.replace("/#about")}>About</Link>
            <Link  id="navitem" onClick={() => window.location.replace("/")} ><img src="https://i.imgur.com/Nuqv0mY.png" alt="" className="navlogo" /></Link>
            <Link to="/PostIndex" id="navitem">Gallery</Link>
        </div>
    )
}

export default Nav;