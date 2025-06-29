import React from "react";
import { SectionId } from "../../constants/sections";

const projects = [
  {
    title: "Cat Gallery App",
    description:
      "A mobile app built with React Native to browse and favorite cat images. Uses TheCatAPI and infinite scroll.",
    link: "https://github.com/yourname/cat-gallery",
  },
  {
    title: "PDF Maintenance Form",
    description:
      "A tool using PDFKit to generate PDF maintenance forms with dynamic fields and data.",
    link: "https://github.com/yourname/pdf-maintenance-form",
  },
];

const Projects: React.FC = () => {
  return (
    <section id={SectionId.Projects} className="py-24">
      <div className="container mx-auto px-4 py-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                View on GitHub →
              </a>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
