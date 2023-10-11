import React, {useState} from "react";
import videoFrame from '../assets/Images/videoFrame.png'
import video from '../assets/videos/gamingVideo.mp4'
import twitchImg from '../assets/Images/twitchImg.svg'
import roboxImg from '../assets/Images/robloxImg.svg'
import chessImg from '../assets/Images/ChessImg.svg'
import gamesRadarImg from '../assets/Images/gamesRadarImg.svg'
import brandCard2 from '../assets/Images/brandCard2.svg'
import brandCard3 from '../assets/Images/brandCard3.svg'
import brandCard4 from '../assets/Images/brandCard4.svg'
import {DefaultPlayer as Video} from 'react-html5video'
import 'react-html5video/dist/styles.css'
import '../assets/scss/homepage.scss'
import btnPlay from '../assets/Images/btn_play.svg'

const Banner = () => {
//     const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlayClick = () => {
//     setIsPlaying(!isPlaying);
//   };
    return (
        <>
            <div className="container mt-5 pt-4">
                <div className="banner">
                    <div>
                        <h3>Next Generation Get Your Desierd Rank Now</h3>
                    </div>
                    <div className="mt-5 pt-5 videoContainer">
                        <img src={videoFrame} alt="videoFrame" className="vidoBackFrame "></img>
                        <Video autoPlay loop className="video">
                            <source src={video} type="video/webm" ></source>
                        </Video>
                        <span className="resgisterbtn-text">Register Now</span>
                    </div>
                </div>
                <div className="row BrandLogos mt-5 pt-5">
                    <img src={twitchImg} alt="twitchImg" style={{ marginTop: "-15px" }}></img>
                    <img src={roboxImg} alt="roboxImg" className="mt-2"></img>
                    <img src={chessImg} alt="chessImg"></img>
                    <img src={gamesRadarImg} alt="gamesRadarImg"></img>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row px-3 mt-5 cardsSection">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                        <img src={brandCard2} alt="Card" className="w-100"></img>
                        <div className="cardplaybtn_div">
                            <img src={btnPlay} className="cardplay_btn" alt=""></img>
                            <span className="cardplaybtn-text">Play Now</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                        <img src={brandCard3} alt="Card" className="w-100"></img>
                        <div className="cardplaybtn_div">
                            <img src={btnPlay} className="cardplay_btn" alt=""></img>
                            <span className="cardplaybtn-text">Play Now</span>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-5">
                        <img src={brandCard4} alt="Card" className="w-100"></img>
                        <div className="cardplaybtn_div">
                            <img src={btnPlay} className="cardplay_btn" alt=""></img>
                            <span className="cardplaybtn-text">Play Now</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;
