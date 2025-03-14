// import React from "react";

// const ContactForm = () => {
//   return (
//     <div className="bg-[#1C1C1C] rounded-lg p-4 sm:p-10">
//       <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
//         Get In Touch
//       </h1>
//       <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
//         deleniti, amet, esse alias maiores fuga cumque iusto quae velit eum
//         cupiditate soluta fugiat nam obcaecati enim reprehenderit porro corrupti
//         doloribus.
//       </p>
//       {/* inut fields */}
//       <form className="mt-8 block w-full overflow-hidden">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="text"
//             placeholder="First name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Last name"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
//           />
//         </div>
//         <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
//           />
//         </div>
//         <div>
//           <select
//             className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
//             defaultValue="" // Use defaultValue instead of selected
//           >
//             <option value="" disabled>
//               Select an option
//             </option>
//             <option value="frontend">Frontend Development</option>
//             <option value="react Js">React Js Development</option>
//           </select>
//         </div>
//         <textarea
//           className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
//           rows={7}
//           placeholder="Message"
//         ></textarea>
//         <div className="mt-4">
//           <button className="px-8 py-3.5 bg-[#F78F42] text-white hover:bg-[#ffffff] hover:text-black transition-all duration-150 rounded-full">
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    option: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted:", formData);
      alert("Message send successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        option: "",
        message: "",
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#1C1C1C] rounded-lg p-4 sm:p-10">
      <h2 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Get In Touch
      </h2>
      <form
        onSubmit={handleSubmit}
        className="mt-8 block w-full overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outine-none w-full"
          />
        </div>
        <div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          >
            <option value="">Select an option</option>
            <option value="inquiry">Frontend Developement</option>
            <option value="support">React Js Development</option>
            <option value="feedback">UI/UX Designer</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={7}
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#F78F42] text-white hover:bg-[#ffffff] hover:text-black transition-all duration-150 rounded-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
