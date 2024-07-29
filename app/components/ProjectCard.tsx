import React from "react";
import Image from "next/image";

interface Props {
  project: {
    id: number;
    name: string;
    techStack: string[];
    description: string;
    liveUrl: string;
    githubUrl: string;
    image: any;
  };
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border border-opacity-50 border-yellow-200 rounded-md w-full sm:max-w-96 px-1">
      <div className="relative w-full h-56">
        <Image src={project.image} alt="moviehunt" fill objectFit="cover" />
      </div>
      <div className="p-5 flex flex-col">
        <p className="text-base sm:text-xl font-semibold text-gray-300">
          {project.name}
        </p>
        <div className="flex items-center justify-start flex-wrap gap-3 py-2">
          {project.techStack.map((tech) => (
            <div
              className="bg-transparent border-2 border-green-400 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-500 text-xs sm:text-sm text-green-400 opacity-95 hover:opacity-100"
              key={tech}
            >
              {tech}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-xs sm:text-base py-2">
          {project.description}
        </p>
        <a href={project.githubUrl} target="_blank">
          <button className="bg-yellow-500 px-4 py-2 flex items-center justify-center gap-4 text-black rounded-lg text-sm sm:text-lg tracking-wide mt-4">
            View Project
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
