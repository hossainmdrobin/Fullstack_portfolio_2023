import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import { frontendSkills, backendSkills } from "./skillList";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1000px]">
        <SectionHeader title="My Skills" />
        <div className="md:flex w-full ">
          <div className="md:w-1/2 p-2">
            <div className="grid grid-cols-2 bg-[#2c2c6c] w-full p-3 rounded-lg border-2 border-[#2c2c6c] hover:bg-transparent">
              {frontendSkills.map((item, i) => (
                <div className="flex my-2" key={i}>
                  <span>
                    <BsPatchCheckFill className="text-[#4bd5ff]" />
                  </span>
                  <p className="text-white">{item.title}</p>
                  <span className="text-sm text-[#4bd5ff] font-semibold">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/2 p-2">
            <div className="grid grid-cols-2 bg-[#2c2c6c] w-full p-3 rounded-lg border-2 border-[#2c2c6c] hover:bg-transparent">
              {backendSkills.map((item, i) => (
                <div className="flex my-2" key={i}>
                  <span>
                    <BsPatchCheckFill className="text-[#4bd5ff]" />
                  </span>
                  <p className="text-white">{item.title}</p>
                  <span className="text-sm text-[#4bd5ff] font-semibold">
                    {item.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
