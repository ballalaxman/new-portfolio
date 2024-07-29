/* eslint-disable react/jsx-key */
import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../utils/staticdata";

const Projects = () => {
  return (
    <div
      className="relative w-full max-w-7xl items-start justify-center mx-auto py-16"
      id="projects"
    >
      <h1 className="text-5xl sm:text-[6.8rem] md:text-9xl font-extrabold tracking-wide opacity-[0.05] absolute left-5 top-0">
        Projects
      </h1>
      <div className="flex flex-wrap w-full px-5 mt-5 justify-center gap-9 pt-0 sm:pt-20">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
