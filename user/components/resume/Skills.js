import React from 'react'
import { motion } from 'framer-motion';
import { developmentSkillsData, otherSkillsData } from '@/constants';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col xl:flex-row gap-10 xl:gap-20"
    >
      <div className="w-full xl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-sm tracking-[4px] uppercase">
            Features
          </span>
          <h2 className="text-3xl text-white md:text-4xl font-bold">Other&apos;s Skill</h2>
        </div>

        <div className='className="mt-14 w-full flex flex-col gap-6'>
          {
            otherSkillsData.map((item) => (
              <div key={item.id} className="overflow-x-hidden">
                <p className="text-sm uppercase text-white font-medium">{item.skill}</p>
                <span className="w-full h-2 bgOpacity bg-[#101011] rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${item.percentage}%` }}
                    className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute text-white -top-7 right-0">{item.percentage}%</span>
                  </motion.span>
                </span>
              </div>
            ))
          }

        </div>
      </div>

      <div className="w-full xl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-sm tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl text-white md:text-4xl font-bold">Development Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          {
            developmentSkillsData.map((skill) => (
              <div key={skill.id} className="overflow-x-hidden">
                <p className="text-sm text-white uppercase font-medium">{skill.skill}</p>
                <span className="w-full h-2 bgOpacity bg-[#101011] rounded-md inline-flex mt-2">
                  <motion.span
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ width: `${skill.percentage}%` }}
                    className=" h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  >
                    <span className="absolute text-white -top-7 right-0">{skill.percentage}%</span>
                  </motion.span>
                </span>
              </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  );
}

export default Skills