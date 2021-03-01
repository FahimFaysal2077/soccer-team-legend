import React from 'react';
import banner from '../../images/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt=""/>
            <div className="centered1">JOIN OUR CLUB</div>
            <div className="centered2">FOOTBALL</div>
        </div>
    );
};

export default Banner;