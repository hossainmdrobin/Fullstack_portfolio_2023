import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillFacebook } from "react-icons/ai";

const items = [
  { title: "Home", url: "#" },
  { title: "About", url: "#" },
  { title: "Experience", url: "#" },
  { title: "Service", url: "#" },
  { title: "Portfolio", url: "#" },
  { title: "Testimonials", url: "#" },
  { title: "Contact", url: "#" },
];

const socialItems = [
  { title: "LinkedIn", url: "s", icon: <AiFillLinkedin /> },
  { title: "Facebook", url: "s", icon: <AiFillFacebook /> },
  { title: "Github", url: "s", icon: <AiFillGithub /> },
];

const Menu = () => {
  return (
    <div className="flex mt-6 mb-12 flex-col items-center text-[#4bd5ff]">
      <h1 className="mb-4 text-2xl font-bold">Robin</h1>
      <div className="hidden md:block">
        {items.map((item, i) => (
          <a
            className="font-semibold hover:underline duration-4000 text-sm md:text-md md:mx-4"
            href=""
            key={i}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        {items.slice(0, 4).map((item, i) => (
          <a
            className="font-semibold hover:underline duration-4000 text-sm md:text-md mx-4"
            href=""
            key={i}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="md:hidden">
        {items.slice(4, 7).map((item, i) => (
          <a
            className="font-semibold hover:underline duration-4000 text-sm md:text-md mx-4"
            href=""
            key={i}
          >
            {item.title}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        {socialItems.map((item, i) => (
          <span
            className="text-3xl hover:text-white cursor-pointer mx-[1px] md:mx-2 my-4"
            key={i}
          >
            {item.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Menu;
