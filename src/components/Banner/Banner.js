import React from "react";
import Intro from "../intro/Intro";
import RightBanner from "./rightBanner";

const Banner = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center flex-col-reverse md:flex-row justify-between p-2 min-h-screen w-full max-w-[1000px]">
        <div className="  flex flex-col py-12 md:w-1/2">
          <p className="text-[#fff] text-xs">Hello I'm</p>
          <p className="text-2xl text-white font-semibold">Md Robin Hossain,</p>
          {/* <p className="text-[#4bd5ff]">Fullstack Engineer</p> */}

          <div className="text-justify text-white">
            Results-oriented<span className="text-[#4bd5ff] font-bold"> fullstack developer with</span> {" "}
            <span className="text-[#4bd5ff] font-bold">
              1 year of professional experience
            </span>{" "}
            in MERN stack and related technologies. Passionate about staying
            up-to-date with the latest advancements in the field. Highly
            motivated, detail-oriented, and dedicated to delivering high quality
            solutions. Committed to continuously expanding skills and
            contributing to the success of the team.
          </div>
          <div>
            <a
              className="text-white py-2 px-4 rounded border-[#4bd5ff] duration-300 hover:bg-[#4bd5ff] border"
              href=""
              download
            >
              Download Resume
            </a>
            <button className="py-2 px-4 rounded duration-300 hover:bg-white m-4 bg-[#4bd5ff]">
              Let's Talk
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <RightBanner />
        </div>
      </div>
    </div>
  );
};

export default Banner;
