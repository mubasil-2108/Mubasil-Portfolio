import React from "react";
import { motion } from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-sm tracking-[4px]">2024 - present</span>
          <h2 className="text-4xl text-white font-bold">Work Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-white border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="React Native, React JS, MERN Stack Developer"
            subTitle="Zaman IT - (10/2024 - present)"
            result="Pakistan"
            des="Demonstrated strong technical expertise and professionalism in both front-end and full-stack development"
          />
          <ResumeCard
            title="React Native Developer"
            subTitle="Balawal IT House - (05/2024 - 09/2024)"
            result="Pakistan"
            des="Passionate and experienced React Native Developer with a strong foundation in building robust mobile applications for android."
          />
          <ResumeCard
            title="Wordpress"
            subTitle="royalfeelpk.com - (2024 - present)"
            result="Pakistan"
            des="Its a beauty and healthcare website, where every product is crafted to amplify your natural beauty. Discover a symphony of colors and textures designed to elevate your allure and empower your confidence."
          />
          <ResumeCard
            title="Front-end Developer using UI"
            subTitle="Balawal IT House - (05/2024 - 09/2024)"
            result="Pakistan"
            des="Skilled in app interface development using React Native, integrating UI design principles for seamless and visually appealing user experiences."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;
