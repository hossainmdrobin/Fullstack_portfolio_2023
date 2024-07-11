import React from 'react';
import Image from "next/image";
import profilePic from "./../../assets/images/formalpicSelf.png";
import native from "./../../assets/images/native.png";
import react from "./../../assets/images/react.png";
import redux from "./../../assets/images/redux.png";
import html from "./../../assets/images/html.png";
import sass from "./../../assets/images/sass.png";
import next from "./../../assets/images/next.png";
import graphql from "./../../assets/images/graphal.png";
import mongodb from "./../../assets/images/mongodb.png";
import node from "./../../assets/images/node.png";
import express from "./../../assets/images/express.png";
import styles from "./banner.module.css"

const RightBanner = () => {
    const {skill1, skill2, skill3, skill4} = styles;
    return (
        <div className='relative'>
            <div className="overflow-hidden bg-gradient-to-r from-transparent to-[#4bd5ff] w-[320px] h-[320px] rounded-full">
            <Image src={profilePic} alt="profile_Photo" height={"100%"} />
          </div>
          <span>
            <Image src={native} className={skill2 + ' w-12 absolute top-36'} alt="native" />
            <Image src={react} className={skill4 + ' w-12 absolute top-8'} alt="native" />
            <Image src={redux} className={skill2 + ' w-12 absolute bottom-8'} alt="native" />
            <Image src={next} className={skill4 + ' w-12 absolute bottom-8'} alt="native" />
            <Image src={sass} className={skill2 + ' w-12 absolute top-8'} alt="native" />
            <Image src={html} className={skill4 + ' w-12 absolute top-36'} alt="native" />

            <Image src={graphql} className={skill3 + ' w-12 absolute top-20'} alt="native" />
            <Image src={node} className={skill3 + ' w-12 absolute bottom-16'} alt="native" />
            <Image src={mongodb} className={skill1 + ' w-12 absolute bottom-16'} alt="native" />
            <Image src={express} className={skill1 + ' w-24 absolute top-20'} alt="native" />            
          </span>
        </div>
    );
}

export default RightBanner;
