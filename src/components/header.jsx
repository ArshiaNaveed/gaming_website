import React from "react";
import logo from '../assets/Images/logo.svg'
import '../assets/scss/homepage.scss'
import btn_com from '../assets/Images/header_btn_component.svg'

const Header = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar nav-box navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" className="img-fluid" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className="navbar-toggler-icon hamburger-react" aria-expanded="false" role="button" tabIndex={0} style={{ display:" flex" , justifyContent: "flex-end",cursor: "pointer", height: "48px", position: "relative", transition: "all 0.4s cubic-bezier(0, 0, 0, 1) 0s", width: "48px", outline: "none" }}>
              <div style={{ transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0.2s", transform: "none" }}>
                <div style={{ background: "white", height: "3px", left: "8px", position: "absolute", width: "32px", top: "13px", transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0s", transform: "none" }}>
                </div>
              </div>
              <div style={{ transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0.2s", transform: "none" }}>
                <div style={{ background: "white", height: "3px", left: "8px", position: "absolute", width: "32px", top: "23px", transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0s", transform: "none" }}>
                </div>
              </div>
              <div style={{ transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0.2s", transform: "none" }}>
                <div style={{ background: "white", height: "3px", left: "8px", position: "absolute", width: "32px", top: "33px", transition: "all 0.2s cubic-bezier(0, 0, 0, 1) 0s", transform: "none" }}>
                </div>
              </div>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <a href="#" className="nav-link active-link">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Stats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="btn_div">
            <img src={btn_com} className="navbarbutton"></img>
            <span className="btn-text">Register</span>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Header;
