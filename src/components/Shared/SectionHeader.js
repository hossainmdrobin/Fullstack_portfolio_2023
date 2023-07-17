import React from "react";

const SectionHeader = ({title}) => {
  return (
    <div className="flex items-center flex-col mb-8">
      <div>
        <h1 className="text-white font-semibold text-2xl">
          {title}
        </h1>
        <div className="h-[3px] w-20 bg-[#4bd5ff]"></div>
      </div>
    </div>
  );
};

export default SectionHeader;
