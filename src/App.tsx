import React from "react";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import Projects from "./components/ui/Projects";
import About from "./components/ui/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
