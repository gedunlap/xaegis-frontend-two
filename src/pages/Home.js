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
                <div className="aboutboxtop">
                    <div>XAEGIS</div>
                </div>
                <div className="aboutboxbottom"  id="about">
                    <div className="aboutleft">XAegis is devoted to</div>
                    <div className="aboutright">We are here so the most devoted and hard working extreme atheletes in the world may get their name out there in order to achieve their goals.</div>
                </div>
            </div>
        </div>
    )
}


export default Home;