import React from "react";
import Hero from "./components/ui/Hero";
import Navbar from "./components/ui/Navbar";
import Projects from "./components/ui/Projects";
import About from "./components/ui/About";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
