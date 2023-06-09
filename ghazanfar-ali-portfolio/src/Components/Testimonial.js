import "./script.js"
import React from 'react';
import { useContext } from "react";
import { ActiveMenuContext } from "../App.js";


export const Testimonial = () => {
  const { registerSection } = useContext(ActiveMenuContext);

  return (
    <div className="testimonial" id="testimonial"   ref={registerSection("section-5")}>
      <div className="testimonoal-text"> 
        Contact
      </div>
      <div className="get-in-touch">
        Get in Touch
      </div>
<div className="info">
      <div className="personal-info">
        <div className="mobile-number">
          <i className="fa fa-phone" aria-hidden="true"></i>
          <div className="number">(+92) 313 4263844</div>
        </div>

        <div className="mail">
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <div className="number">ghazanfar.alizahid@gmail.com</div>
        </div>
        <div className="follow-me">
          Follow Me
          <div className="share-icons">
            <ul>
              <li className="icons-2 icon-1 fa fa-facebook" aria-hidden="true"></li>
              <li className="icons-2 fa fa-github" aria-hidden="true"></li>
              <li className="icons-2 fa fa-twitter" aria-hidden="true"></li>
              <li className="icons-2 fa fa-linkedin" aria-hidden="true"></li>
            </ul>
          </div>
        </div>
      </div>
      <form className="form">
        <div className="form-1">
          <input type="text" className="name-form" placeholder="Name" />
          <input type="email" className="email-form" placeholder="Email" />
        </div>
        <div className="form-2">
          <textarea className="textarea" rows="5" placeholder="Tell us more about your needs........" />
        </div>
        <input className="submit-button" type="submit" value="submit" />
      </form>
    </div>
    </div>
  )
}
