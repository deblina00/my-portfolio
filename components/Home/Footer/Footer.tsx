import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <div className="pb-16 bg-[#050709]">
      <div>
        <Image
          src="/images/LOGOO.png"
          alt="logo"
          width={200}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-5 text-white">
        <a
          href="#"
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
      <div className="flex items-center flex-wrap justify-center mt-6 space-x-10 text-white font-bold">
        {/* <div>Home.</div>
        <div>Services.</div>
        <div>Projects.</div>
        <div>Reviews.</div>
        <div>Contact.</div> */}
        <a href="#">Home.</a>
        <a href="#">Services.</a>
        <a href="#">Projects.</a>
        <a href="#">Reviews.</a>
        <a href="#">Contacts.</a>
      </div>
      <div className="text-white text-opacity-60 mt-6 text-center">
        © 2025 All Rights Reserved by React JS Developer
      </div>
    </div>
  );
};

export default Footer;
