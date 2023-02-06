
import React from "react";
import './style.css';
import images from './images/ghazanfar-ali-image.jpg'


const Header = () => {
    return (
        <div className="header">
            <nav className="navigation_bar">
            <ul className="header-nav">
                <img className="prof-image" src={images} alt="ghazanfar ali" />
                <h1 className="name">Ghazanfar Ali</h1>
                <li className="option-1 options"><a href="#home">Home</a></li>
                <li className="options"><a href="#about-me"> About</a></li>
                <li className="options"><a href="#what-i-do">Services</a></li>
                <li className="options">Services</li>
                <ul className="social-icons">
                    <li className="icons icon-1 fa fa-facebook" aria-hidden="true"></li>
                    <li className="icons fa fa-github" aria-hidden="true"></li>
                    <li className="icons fa fa-twitter" aria-hidden="true"></li>
                    <li className="icons fa fa-linkedin" aria-hidden="true"></li>
                </ul>
            </ul>
            </nav>
            </div>
            )
}

export default Header;