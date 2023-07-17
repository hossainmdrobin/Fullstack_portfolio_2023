import React from "react";

const SingleTab = ({ label, url, children,index, setIndex,i }) => {
  return (
    <a href="#sss" onClick={()=>setIndex(i)} className={`cursor-pointer flex  flex-col items-center justify-center text-white mx-3 w-8 h-8 rounded-full duration-400 ${index===i?"bg-[#2c2c6c]":" "} `}>
      {children}
      {/* <span className="text-[6px] mb-1 text-white font-bold">{label}</span> */}
    </a>
  );
};

export default SingleTab;
