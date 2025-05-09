"use client";
import React, { useRef, useState } from 'react'
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import {
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from '@heroicons/react/24/solid';

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const form = useRef()
  // ========== Email Validation start here ==============
  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };
  // ========== Email Validation end here ================

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Plese give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      emailjs.sendForm('service_uenf2mt', 'template_r5kzp5d', form.current, 'AdxYXhNFv6_rLNkGg')
        .then(() => {
          setSuccessMsg(
            `Thank you dear ${username}, Your Messages has been sent Successfully!`
          );
          setErrMsg("");
          setUsername("");
          setPhoneNumber("");
          setEmail("");
          setSubject("");
          setMessage("");
        }, () => {
          setErrMsg(
            `Dear ${username}, Something went wrong..!`
          );
        });

    }
  };
  return (
    <div
      id="contact"
      className="w-full py-20"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[14px]">
            CONTACT ME&nbsp;&nbsp;
          </h1>
        </motion.div>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
          Contact With Me
        </h1>
      </div>
      <div className="w-full p-10">
        <div className="w-full h-auto flex flex-col xl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full xl:w-[60%] h-full py-10 bg-gradient-to-r from-[rgba(156,39,176,0.5)] to-[rgba(0,188,212,0.5)] flex flex-col gap-8 p-4 xl:p-8 rounded-lg shadow-2xs">
            <form ref={form} onSubmit={handleSend} className="w-full z-[100] flex flex-col gap-4 xl:gap-6 py-2 xl:py-5">
              {errMsg && (
                <p className="py-3 bg-transparent shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-transparent shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col xl:flex-row gap-10">
                <div className="w-full xl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    name="user_name"
                    className={`${errMsg === "Username is required!" &&
                      "outline-designColor"
                      } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                    type="text"
                  />
                </div>
                <div className="w-full xl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    name='user_phone'
                    className={`${errMsg === "Phone number is required!" &&
                      "outline-designColor"
                      } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="user_email"
                  className={`${errMsg === "Please give your Email!" &&
                    "outline-designColor"
                    } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  name='subject'
                  className={`${errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                    } w-full h-12 rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className={`${errMsg === "Message is required!" && "outline-designColor"
                    } w-full rounded-lg border-b-[1px] border-b-gray-600 bg-[#191b1e] text-lightText px-4 py-2 active:outline-none focus-visible:outline-designColor outline-none focus-visible:border-b-transparent duration-300 resize-none`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type='submit'
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-transparent shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-transparent shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact