"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import scroll from "@/public/scroll.png";
import Image from "next/image";

const HeroContent = () => {
  const [text] = useTypewriter({
    words: ["React native Developer.", "Logo Designer.", "MERN Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              WELCOME TO MY WORLD&nbsp;
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              <span className="text-6xl">
                Hi&#44; I&apos;m
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "}
                  Mubasil{" "}
                </span>
              </span>
              <br />
              a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">{text}</span>
              <Cursor
                cursorBlinking={true}
                cursorStyle="|"
                cursorColor="#9c43ed" />
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Experienced developer skilled in creating innovative software solutions, proficient in multiple programming languages, and dedicated to delivering high-quality, efficient code. Strong problem-solver with a passion for continuous learning and improvement.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <a href='/pdf/Mubasil-Resume.pdf' download={'Mubasil-Resume.pdf'}>Download CV</a>
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => window.scrollBy({ top: 800, behavior: "smooth" })}
        className="w-full h-full z-50 flex justify-center items-center cursor-pointer"
      >

        <Image
          src={scroll}
          alt="scroll down"
          height={30}
          width={30}
          className="absolute translate-y-[-120px] opacity-30"
        />

      </motion.div>
    </>
  );
};

export default HeroContent;
