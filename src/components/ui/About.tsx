import React from "react";
import { SectionId } from "../../constants/sections";

const About: React.FC = () => {
  return (
    <section id={SectionId.About} className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
          Hello! I'm <strong className="text-blue-600">Anucha</strong>, a
          passionate full-stack developer who loves crafting elegant and
          scalable web experiences. I specialize in <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Node.js</strong>. My focus is
          not just building features, but also ensuring performance,
          maintainability, and delightful UX ✨
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed text-center md:text-left">
          When I’m not coding, I’m probably watching movies — or thinking about
          code while watching movies. 🤓🎬
        </p>
      </div>
    </section>
  );
};

export default About;
