'use client';
import React, { useEffect } from "react";
import ProjectCard from "../sub/ProjectCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchAllProjects } from "@/store/project-slice";

const Projects = () => {

  const { projectList } = useAppSelector(state => state.adminProject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      await dispatch(fetchAllProjects());
    };
    fetchProjects();
  }, [dispatch]);

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
          projectList && projectList.length > 0 ?
            projectList.map((item) => (
              <ProjectCard
                key={item?._id}
                src={item?.projectImage[0]}
                title={item?.projectName}
                description={item?.projectDescription}
                lnk={item?.gitHubUrl}
                webLink={item?.websiteUrl}
              />
            ))
            :
            null
        }
      </div>
    </div>
  );
};

export default Projects;
