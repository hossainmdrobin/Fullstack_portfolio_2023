import Image from "next/image";
import React from "react";
import profilePic from "./../../assets/images/formalpicSelf.png";
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

const Intro = () => {
  return (
    <div
      className="max-w-[1200px] mx-auto flex flex-col items-center"
      id="banner"
    >
      <div className="flex flex-col items-center justify-center mb-4">
        <h1 className="text-white font-semibold text-xl ">About me</h1>
        <div className="h-[2px] w-16 bg-[#4bd5ff]"></div>
      </div>

      <div className="flex justify-between">
        <div className="py-1 rounded-lg text-[#4bd5ff] flex flex-col items-center justify-center">
          <AiFillLinkedin className="mx-1" />
          <AiFillFacebook className="mx-1" />
          <AiFillGithub className="mx-1" />
        </div>
        <div className="bg-[#2c2c6c] rounded-t-full px-4">
          <Image src={profilePic} alt="profile_Photo" height={"350"} />
        </div>
      </div>
      <div className="my-4 text-justify text-white mx-4 md:mx-10">
        Results-oriented full stack developer with{" "}
        <span className="text-[#4bd5ff] font-bold text-lg">
          1 year of professional experience
        </span>{" "}
        in MERN stack and related technologies. Passionate about staying
        up-to-date with the latest advancements in the field. Highly motivated,
        detail-oriented, and dedicated to delivering high quality solutions.
        Committed to continuously expanding skills and contributing to the
        success of the team.
      </div>
    </div>
  );
};

export default Intro;
