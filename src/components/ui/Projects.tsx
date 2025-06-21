import React from "react";
import { SectionId } from "../../constants/sections";

const Projects: React.FC<{}> = () => {
  return (
    <section id={SectionId.Projects} className="min-h-screen bg-purple-300">
      <div>Projects</div>
    </section>
  );
};

export default Projects;
