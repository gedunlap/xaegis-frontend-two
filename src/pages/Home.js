import React from 'react'
import {Link} from 'react-router-dom'
import Slideshow from '../components/Slideshow'



const Home = (props) => {
    return (
        <div className="twelve columns homepage">
            <div className="herobox" id="home">
                <img src="https://i.imgur.com/Z52ZRUg.png" alt="" style={{height: "90%"}} />
            </div>
            <div className="slidebox">
                <Slideshow />
            </div>
            <div className="aboutbox">
                <div className="row">
                    <div className="twelve columns aboutboxtop">
                        <div>XAEGIS</div>
                    </div>
                </div>
                
                <div className="row aboutboxbottom"  id="about">
                    <div className="aboutleft">
                        <img className="aboutimg" src="https://i.imgur.com/1QtMi97.png?1" alt="" />
                        <p className="aboutp">XAegis is here to help you connect with the future of your brand. By posting your clips and information here, you are exposing your skill to thousands of potential sponsorship companies.</p>
                        <div className="aboutbreak"></div>
                    </div>
                    <div className="six columns aboutright">
                        <p className="aboutp">Every post to Xaegis brings you one step closer to furthing your sports career toward the future you've always dreamed of.</p>
                        <img className="aboutimg" src="https://i.imgur.com/36iDssd.jpg?1" alt="" />
                    </div>
                </div>
                <div className="row">
                    <Link  className="indexlink" style={{textDecoration:"none"}} onClick={() => window.location.replace("/")} >^ Back To Top ^</Link>
                </div>
            </div>
        </div>
    )
}


export default Home;