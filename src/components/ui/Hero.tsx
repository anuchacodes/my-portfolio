import React from "react";
import { SectionId } from "../../constants/sections";
import Typewriter from "typewriter-effect";

const Hero: React.FC = () => {
  return (
    <section
      id={SectionId.Hero}
      className="min-h-screen flex items-center bg-amber-100"
    >
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-6">
        <div className="flex-1 text-center space-y-6">
          <h1 className="text-2xl md:text-5xl lg:text-5xl text-center font-bold">
            <Typewriter
              options={{
                strings: [
                  "Anucha Ngoenkhao",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </h1>

          <p className="text-lg text-gray-700">
            Mobile Developer | Frontend Developer | Full-Stack Developer
          </p>
          <a
            href="#projects"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            View My Projects
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Illustration"
            className="max-w-[300px] md:max-w-[400px] rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
