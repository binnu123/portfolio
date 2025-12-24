// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import portfolio from "../../../assets/lottie/portfolio3.json";
import AnimationLottie from "../../helper/animation-lottie";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        priority
        className="absolute -top-[98px] -z-10 pointer-events-none"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-10 w-full">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10"
        >
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-pink-500"
            >
              {personalData.name}
            </motion.span>
            ,<span className="inline-block"> {` I'm a Professional `}</span>
            <span className="text-[#16f2b3] block min-h-[1.6em] whitespace-nowrap ">
              {/* {personalData.designation} */}
              <TypeAnimation
                sequence={[personalData.designation, 1500, "", 500]}
                speed={50}
                repeat={Infinity}
                cursor={false}
              />
            </span>
          </h1>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="my-12 flex items-center gap-5"
          >
            {[
              { icon: <BsGithub size={30} />, link: personalData.github },
              { icon: <BsLinkedin size={30} />, link: personalData.linkedIn },
              { icon: <FaFacebook size={30} />, link: personalData.facebook },
              { icon: <SiLeetcode size={30} />, link: personalData.leetcode },
              {
                icon: <FaTwitterSquare size={30} />,
                link: personalData.twitter,
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                target="_blank"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                {item.icon}
              </Link>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center gap-3"
          >
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-xs md:text-sm font-medium uppercase tracking-wider text-white flex items-center gap-1 hover:gap-3 transition-all">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE – LOTTIE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="order-1 lg:order-2 flex justify-center items-center"
        >
          <div className="w-full max-w-xl">
            <AnimationLottie animationPath={portfolio} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
