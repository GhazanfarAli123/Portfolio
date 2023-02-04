import "./script.js"
import React from 'react';
import Typewriter from "typewriter-effect";

export const Home = () => {

  return (
    <div className="home-page-background" id="home">
      <div className="welcome">Welcome</div>

      <div className="app2">
        <Typewriter
          options={{
            strings: ["Hi,I'm Ghazanfar Ali", "I am a Front-end developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <i class="fas fa fa-chevron-down" aria-hidden="true"></i>

    </div>
  )
}