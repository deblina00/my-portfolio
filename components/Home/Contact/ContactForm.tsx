import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[#1C1C1C] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
      Get In Touch
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
        deleniti, amet, esse alias maiores fuga cumque iusto quae velit eum
        cupiditate soluta fugiat nam obcaecati enim reprehenderit porro corrupti
        doloribus.
      </p>
      {/* inut fields */}
      <form className="mt-8 block w-full overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
        </div>
        <div>
          <select
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
            defaultValue="" // Use defaultValue instead of selected
          >
            <option value="" disabled >
              Select an option
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="react Js">React Js Development</option>
          </select>
        </div>
        <textarea
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button className="px-8 py-3.5 bg-[#F78F42] text-white hover:bg-[#ffffff] hover:text-black transition-all duration-150 rounded-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
