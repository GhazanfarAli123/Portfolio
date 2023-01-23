import React from "react";
import Header from "./Components/header";
import { Services } from "./Components/services";
import { Home } from "./Components/Home";
import "./Components/script.js"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
    </div>
  );
}

export default App;
