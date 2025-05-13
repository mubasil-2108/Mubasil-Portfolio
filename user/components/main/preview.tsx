"use client";
import { slideInFromLeft, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { FiDownload } from "react-icons/fi";

const containerVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const buttonVariant = {
    hover: {
        scale: 1.05,
        backgroundColor: "#4c1d95",
        transition: { duration: 0.3 },
    },
    tap: {
        scale: 0.95,
    },
};

const Preview = () => {
    const [flipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    return (
        <div id="preview" className="w-full h-auto pt-10 flex flex-col items-center justify-center">
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[14px]">
                    PREVIEW CV&nbsp;&nbsp;
                </h1>
            </motion.div>
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 pb-20">
                My Curriculum Vitae
            </h1>
            <motion.div
                className="relative flex justify-center items-center gap-30 px-10"
                variants={containerVariant}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="flex flex-col w-[35%] h-[35%] border-2 border-[#2A0E61] rounded-lg p-4 sm:p-6"
                    variants={cardVariant}
                >
                    <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[50%]">
                        {flipped && (
                            <motion.button
                                onClick={() => window.open("/pdf/Mubasil-Resume.pdf", "_blank")}
                                className="absolute z-[100] cursor-pointer -top-8 -right-9 bg-[#2A0E61] text-white p-2 rounded-full shadow-lg hover:bg-[#0e1361] transition"
                                title="Download CV"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <FiDownload size={20} />
                            </motion.button>
                        )}
                        <motion.div
                            className="relative"
                            animate={{ rotateY: flipped ? 180 : 0 }}
                            transition={{ duration: 0.8 }}
                            style={{ transformStyle: "preserve-3d" }}
                        >
                            {!flipped && (
                                <div className="backface-hidden">
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <Image
                                            src="/bannerImg.jpg"
                                            alt="bannerImg"
                                            width={1000}
                                            height={1000}
                                            objectFit="cover"
                                            className="rounded-lg"
                                        />
                                    </motion.div>
                                </div>
                            )}
                            {flipped && (
                                <div className="w-full h-full backface-hidden bg-transparent rotate-y-180">
                                    <iframe
                                        src="/pdf/Mubasil-Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                                        className="w-[100%] h-[560px] rounded-lg"
                                    />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div className="flex flex-1 flex-col">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="text-[40px] font-semibold text-white py-20"
                    >
                        Hi&#44; its me <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Mubasil!</span><br />
                        Wanna see my CV? Click below to preview it!
                    </motion.h1>
                    <motion.a
                        variants={slideInFromLeft(1)}
                        onClick={handleFlip}
                        className="py-2 z-[100] button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
                        whileHover={buttonVariant.hover}
                        whileTap={buttonVariant.tap}
                    >
                        <a>{flipped ? "Back" : "Preview CV"}</a>
                    </motion.a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Preview;
