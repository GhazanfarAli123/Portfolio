import React from "react";
import Header from "./Components/header";
import { Home } from "./Components/Home";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Resume } from "./Components/Resume";
import "./Components/script.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Services />
      <Resume />
    </div>
  );
}

export default App;
