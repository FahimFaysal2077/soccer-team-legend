import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h1>PSG</h1>
            <nav>
                <a href="/quick search">QUICK SEARCH</a>
                <a href="/categories">CATEGORIES</a>
                <a href="/teams">TEAMS</a>
                <a href="/contact">CONTACT</a>
                <a href="/about us">ABOUT US</a>
            </nav>
        </div>
    );
};

export default Header;