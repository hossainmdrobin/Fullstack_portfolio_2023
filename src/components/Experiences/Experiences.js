import Image from "next/image";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { reslist } from "./responsibilities";

import itco from "./../../assets/images/itco.png";
import SectionHeader from "../Shared/SectionHeader";

const Experiences = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1000px] min-h-screen p-2">
        <SectionHeader title="Professional Experience" />
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="md:flex">
              <div className="rounded-xl inline-block overflow-hidden">
                <Image src={itco} alt="company_logo" />
              </div>
              <div className="pl-2">
                <h1 className="text-white text-3xl">ITCO</h1>
                <p className="text-white">IT, Dhaka</p>
                <p className="text-[#4bd5ff] font-semibold">2022 - Present</p>
                <a
                  href="https://shongshari.com"
                  target="blank"
                  className="text-white hover:text-[#4bd5ff]"
                >
                  See Project
                </a>
              </div>
            </div>
            <div>
              <h1 className="text-white text-lg font-semibold mt-4">
                Core Technologies used
              </h1>
              <div className="h-[3px] w-20 mb-4 bg-[#4bd5ff]"></div>
              <ul>
                <li className="text-white">
                  <span className="font-bold text-[#4bd5ff]">Frontend:</span>{" "}
                  React js, Redux toolkit, RTK query, Taillwind CSS and so many
                  packages
                </li>
                <li className="text-white">
                  <span className="font-bold text-[#4bd5ff]">Backend:</span>{" "}
                  Node js, Express js, MongoDB, Socket.io, Mongoose and so many
                  packages
                </li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-lg text-white font-semibold">
              My Responsibilities
            </h1>
            <div className="h-[3px] w-20 mb-4 bg-[#4bd5ff]"></div>
            <ul>
              {reslist.map((item, i) => (
                <li className="flex my-3" key={i}>
                  <span className="w-6 mt-1">
                    <AiOutlineCheckCircle className="text-[#4bd5ff]" />
                  </span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
