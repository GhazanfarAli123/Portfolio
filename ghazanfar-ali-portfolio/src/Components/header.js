
import React from "react";
import './style.css';
import images from './images/ghazanfar-ali-image.jpg'


const Header = () => {
    return (
        <div className="header">
            <nav className="navigation_bar">
            <ul>
                <img className="prof-image" src={images} alt="ghazanfar ali" />
                <h1 className="name">Ghazanfar Ali</h1>
                <li className="option-1 options">home</li>
                <li className="options">about us</li>
                <li className="options">contact us</li>
                <li className="options">services</li>
                <ul className="social-icons">
                    <li className="icons icon-1 fa-brands fa-facebook-f"></li>
                    <li className="icons">hallo</li>
                    <li className="icons">hallo</li>
                    <li className="icons">hallo</li>
                </ul>
            </ul>
            </nav>
            </div>
            )
}

export default Header;