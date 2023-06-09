
import React, { useState, useEffect } from "react";
import './style.css';
import images from './images/ghazanfar-ali-image.jpg'
import { useContext } from "react";
import { ActiveMenuContext } from "../App.js";


const Header = () => {
  const { registerTrigger } = useContext(ActiveMenuContext);
  useEffect(() => {
    const navIcons = document.querySelectorAll("#nav-icon4");
    navIcons.forEach((navIcon) => {
      navIcon.addEventListener("click", function () {
        this.classList.toggle("open");
      });
    });

    var myElement = document.getElementById("mob-menu");
    var myElement1 = document.getElementById("nav-icon4");

    // Define the toggle function
    myElement.style.display = "none"
    function toggleDisplay() {
      if (myElement.style.display === "none") {
        myElement.style.display = "block";
      } else {
        myElement.style.display = "none";
      }
    }

    // Add a click event listener to the element
    myElement1.addEventListener("click", toggleDisplay);

    return () => {
      navIcons.forEach((navIcon) => {
        navIcon.removeEventListener("click", function () {
          this.classList.toggle("open");
        });
      });
      myElement1.removeEventListener("click", toggleDisplay);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleNavIconClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="header">
        <div className="navigation_bar">
          <ul className="header-nav">
            <img className="prof-image" src={images} alt="ghazanfar ali" />
            <h1 className="name">Ghazanfar Ali</h1>
            <li className="option-1 options" ref={registerTrigger("section-1")}><a href="#home">Home</a></li>
            <li className="options" ref={registerTrigger("section-2")}><a href="#about-me"> About</a></li>
            <li className="options" ref={registerTrigger("section-3")}><a href="#what-i-do">Services</a></li>
            <li className="options" ref={registerTrigger("section-4")}><a href="#resume">Resume</a></li>
            <li className="options" ref={registerTrigger("section-5")}><a href="#testimonial">Testimonial</a></li>

            <ul className="social-icons">
              <li className="icons icon-1 fa fa-facebook" aria-hidden="true"></li>
              <li className="icons fa fa-github" aria-hidden="true"></li>
              <li className="icons fa fa-twitter" aria-hidden="true"></li>
              <li className="icons fa fa-linkedin" aria-hidden="true"></li>
            </ul>
          </ul>
        </div>

      </div>

      <div className="navbar">
        <div className="name2">
          Ghazanfar Ali
        </div>
        <div id="nav-icon4" onClick={handleNavIconClick} className={isOpen ? "open" : ""}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className="mob-menu" id="mob-menu">
     <li className="option-1 options"><a href="#home">Home</a></li>
            <li className="options" ><a href="#about-me"> About</a></li>
            <li className="options" ><a href="#resume">Resume</a></li>
            <li className="options" ><a href="#testimonial">Testimonial</a></li>
            <li className="options" ><a href="#what-i-do">Services</a></li>

      </ul>
    </>

  )
}

export default Header;