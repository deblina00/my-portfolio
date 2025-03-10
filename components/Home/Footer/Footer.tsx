import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" pb-16 bg-[#050709]">
      <div>
        <Image
          src="/images/LOGOO.png"
          alt="logo"
          width={200}
          height={180}
          className="mx-auto"
        />
      </div>
      <div className="flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold">
        <div>Home.</div>
        <div>Services.</div>
        <div>Projects.</div>
        <div>Reviews.</div>
        <div>Vontact.</div>
      </div>
      <div className="text-white text-opacity-60 mt-6 text-center">
        © 2025 All Rights Reserved by React JS Developer
      </div>
    </div>
  );
};

export default Footer;
