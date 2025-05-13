import Image from "next/image";
import React from "react";
import { BsGithub, BsGlobe } from "react-icons/bs";

interface Props {
  src: string;
  title: string;
  description: string;
  lnk: string;
  webLink?: string;
}

const ProjectCard = ({ src, title, lnk, webLink, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={500}
  height={300}
        className="w-full h-60 object-cover rounded-lg"
      />

      <div className="relative z-1000 p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <div className="flex flex-row-reverse gap-2">
          <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ad46ff] duration-300 cursor-pointer">
            <a href={lnk} target='_blank' rel="noopener noreferrer">
              <BsGithub />
            </a>
          </span>
          {
            webLink && (
              <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-[#ad46ff] duration-300 cursor-pointer">
                <a href={webLink} target='_blank' rel="noopener noreferrer">
                  <BsGlobe />
                </a>
              </span>
            )
          }
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
