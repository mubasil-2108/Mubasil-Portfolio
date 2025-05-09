import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projectsData } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full w-full gap-10 px-10">
        {
          projectsData.map((item) => (
            <ProjectCard
              key={item.id}
              src={item.image}
              title={item.title}
              description={item.des}
              lnk={item.link}
              webLink={item.webLink}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Projects;
