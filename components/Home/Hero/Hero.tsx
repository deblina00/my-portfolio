import { BaseInfo } from "@/Data/data";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0f10] overflow-hidden relative">
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text content */}
          <div>
            {/* sub heading */}
            <h1
              data-aos="fade-left"
              className="text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold"
            >
              I am {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3.5rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>

            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="flex mt-5 flex-wrap justify-start space-x-3 text-white"
            >
              <a
                href="https://github.com/deblina00"
                className="rounded-[3rem] p-2 border-[2px] border-[#F78F42]"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="rounded-[3rem] p-2 border-[2px] border-[#F78F42]"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="rounded-[3rem] p-2 border-[2px] border-[#F78F42]"
              >
                <CiLinkedin />
              </a>
              <a
                href="#"
                className="rounded-[3rem] p-2 border-[2px] border-[#F78F42]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="rounded-[3rem] p-2 border-[2px] border-[#F78F42]"
              >
                <CiFacebook />
              </a>
            </div>
            {/* Button */}
            <button
              data-aos="zoom-in"
              data-aos-delay="400"
              className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg mt-8 bg-[#F78F42] hover:bg-white hover:text-black flex items-center space-x-2"
            >
              <a href="/images/My.CV.pdf" download="My_CV.pdf">
                <span>Download CV</span>
              </a>
              <FaDownload />
            </button>
          </div>
          {/* Image content */}
          <div
            data-aos="zoom-in"
            data-aos-delay="500"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3px] border-orange-600 overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
