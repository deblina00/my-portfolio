import React, { ReactNode } from "react";

//define props type

type Props = {
  children: ReactNode;
};

const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="bg-[#F78F42] w-fit text-center px-4 py-3 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h1>
  );
};

export default SectionHeading;
