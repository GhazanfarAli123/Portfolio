import "./script.js"
import React from 'react';
import Typewriter from "typewriter-effect";
import { useContext } from "react";
import { ActiveMenuContext } from "../App.js";


export const Home = () => {
  const { registerSection } = useContext(ActiveMenuContext);

  return (
    <section id="home"  ref={registerSection("section-1")}>
    <div className="home-page-background">
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
    </section>
  )
}