import React from "react";
import Header from "./Components/header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Resume } from "./Components/Resume";
import { Testimonial } from "./Components/Testimonial";
import { Footer } from "./Components/Footer";
import "./Components/script.js"
import { useActiveMenu } from "react-active-menu";
import { createContext } from 'react';

export const ActiveMenuContext = createContext(null);

function App() {

  const { registerContainer, registerSection, registerTrigger } = useActiveMenu({
    offset: 60,
    smooth: true
  });

  return (
    <ActiveMenuContext.Provider value={{registerSection, registerTrigger }}>

    <div className="App">
      <Header />
      <div className="sections" rel={registerContainer}>
      <Home />
      <About />
      <Services />
      <Resume />
      <Testimonial />
      <Footer />
      </div>
    </div>
    </ActiveMenuContext.Provider>

  );
}

export default App;
