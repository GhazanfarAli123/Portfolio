import "./script.js"
import React from 'react';
import Typewriter from "typewriter-effect";

export const Home = () => {

    return(
        <div className="app2">
      <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
    )
}