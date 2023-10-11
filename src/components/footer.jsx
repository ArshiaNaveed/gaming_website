import React from "react";
import logo from '../assets/Images/logo.svg'
import socialLinks from '../assets/Images/footer_links.svg'
import '../assets/scss/homepage.scss'
const Footer = () => {
    return (
        <>
            <footer className="footer mt-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                            <a className="" href="#">
                                <img src={logo} alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 footerlink">
                            <a href="#">Marketplace</a>
                            <a href="#">Stats</a>
                            <a href="#">Collection</a>
                            <a href="#">Explore</a>
                            <a href="#">Community</a>
                        </div>
                        <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 ">
                            <a className="" href="#">
                                <img src={socialLinks} alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                    <div className="row px-3">
                        <hr className="hrLine mx-4 my-4"></hr>
                    </div>
                    <div className="row my-4 pb-5">
                        <p>© Copyright 2022, All Rights Reserved by Play Games</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
