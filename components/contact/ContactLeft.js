import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import contactImg from '@/public/contactImg.png';
import Image from 'next/image';

const ContactLeft = () => {
  return (
    <div className="w-full xl:w-[35%] h-full bg-gradient-to-r from-[rgba(156,39,176,0.5)] to-[rgba(0,188,212,0.5)] bg-opacity-10 p-4 xl:p-8 rounded-lg shadow-2xs flex flex-col gap-8 justify-center">
      <Image
        className="w-full h-64 z-[100] object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="z-[100] flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Mubasil Behzad</h3>
        <p className="text-lg font-normal text-gray-400">
          React Native Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Experienced developer skilled in creating innovative software solutions, proficient in multiple programming languages, and dedicated to delivering high-quality, efficient code. Strong problem-solver with a passion for continuous learning and improvement.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"><a className='text-gray-400' href='tel:+923239165382' style={{ textDecoration: 'none' }}>+92 3239165382</a></span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText"><a className='text-gray-400' href='mailto:mubasilbehzad012@gmail.com' style={{ textDecoration: 'none' }}>mubasilbehzad012@gmail.com</a></span>
        </p>
      </div>
      <div className="relative z-[100] flex flex-col gap-4">
        <span className="text-white text-base uppercase font-titleFont mb-4">Find me in</span>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href={process.env.NEXT_PUBLIC_FACEBOOK_URL} target='_blank' rel="noopener noreferrer">
              <FaFacebookF color='#fff' />
            </a>
          </span>
          <span className="bannerIcon">
            <a href={process.env.NEXT_PUBLIC_GITHUB_URL} target='_blank' rel="noopener noreferrer">
              <FaGithub color='#fff'/>
            </a>
          </span>
          <span className="bannerIcon">
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL} target='_blank' rel="noopener noreferrer">
              <FaLinkedinIn color='#fff'/>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft