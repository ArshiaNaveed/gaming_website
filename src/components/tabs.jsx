import React, { useState } from "react";
import '../assets/scss/homepage.scss';
import tabimg1 from '../assets/Images/tabImg1.svg';
import tabimg2 from '../assets/Images/tabImg2.svg';
import tabimg3 from '../assets/Images/tabImg3.svg';
import tabimg4 from '../assets/Images/tabImg4.svg';
import { NavLink } from 'react-router-dom';

const TabCard = ({ images }) => {
    return (
        <div className="row mt-4">
            {images.map((img, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-12 mt-3">
                    <img src={img} className="w-100" alt="" />
                </div>
            ))}
        </div>
    );
};

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Adventure');

    const tabData = {
        Adventure: [tabimg1, tabimg2, tabimg3, tabimg4],
        Arcade: [tabimg4, tabimg3, tabimg2, tabimg1],
        Arena: [tabimg3, tabimg1, tabimg2, tabimg4],
        Avoider: [tabimg4, tabimg3, tabimg2, tabimg1],
        Balance: [tabimg2, tabimg3, tabimg1, tabimg4],
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container my-5 pt-5">
            <div className="tabsContainer">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        <h4>we’re the first gaming award winners in the world</h4>
                    </div>
                </div>
                <div className="row px-3">
                    <div className="options-row mt-2 px-2">
                        <NavLink
                            to="/"
                            className={`optLink ${activeTab === 'Adventure' ? 'active' : ''}`}
                            onClick={() => handleTabChange('Adventure')} activeclassname="active"
                        >
                            <h6 className="option">Adventure</h6>
                        </NavLink>
                        <NavLink
                            to="/home"
                            className={`optLink ${activeTab === 'Arcade' ? 'active' : ''}`}
                            onClick={() => handleTabChange('Arcade')} activeclassname="active"
                        >
                            <h6 className="option">Arcade</h6>
                        </NavLink>
                        <NavLink to="/arena"
                            className={`optLink ${activeTab === 'Arena' ? 'active' : ''}`}
                            onClick={() => handleTabChange('Arena')} activeclassname="active"
                        >
                            <h6 className="option">Arena</h6>
                        </NavLink>
                        <NavLink to="/avoider"
                            className={`optLink ${activeTab === 'Avoider' ? 'active' : ''}`}
                            onClick={() => handleTabChange('Avoider')} activeclassname="active"
                        >
                            <h6 className="option">Avoider</h6>
                        </NavLink>
                        <NavLink to="/balance"
                            className={`optLink ${activeTab === 'Balance' ? 'active' : ''}`}
                            onClick={() => handleTabChange('Balance')} activeclassname="active"
                        >
                            <h6 className="option">Balance</h6>
                        </NavLink>
                        
                       
                    </div>
                </div>
                <TabCard images={tabData[activeTab]} />
            </div>
        </div>
    );
};

export default Tabs;
