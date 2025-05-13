"use client";
import React, { useState } from 'react'
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from '@heroicons/react/24/solid';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  return (
    <div id='resume' className="w-full py-20 px-10">
      <div className="flex flex-col justify-center items-center text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[14px]">
            1+ YEARS OF EXPERIENCE&nbsp;&nbsp;
          </h1>
        </motion.div>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pb-20">
          My Resume
        </h1>
      </div>
      <div className='relative  z-[100]'>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3" >
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`w-full h-20 bg-transparent bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none ${
              educationData ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`w-full h-20 bg-transparent bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none ${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`w-full h-20 bg-transparent bg-opacity-25 text-xl text-gray-300 flex justify-center cursor-pointer hover:bg-opacity-40 duration-300 items-center border-[1px] rounded-none ${
              experienceData ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Experience
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}

    </div>
  );
}

export default Resume