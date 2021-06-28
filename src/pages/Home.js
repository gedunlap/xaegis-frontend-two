import React from 'react'
// import {Link} from 'react-router-dom'
import Slideshow from '../components/Slideshow'



const Home = (props) => {
    return (
        <div className="twelve columns homepage">
            <div className="herobox">
                <img src="https://i.imgur.com/Z52ZRUg.png" alt="" style={{height: "90%"}} />
            </div>
            <div className="slidebox">
                <Slideshow />
            </div>
            <div className="aboutbox">
                <h1 id="about">About</h1>
            </div>
        </div>
    )
}


export default Home;