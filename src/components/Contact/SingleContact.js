import React from "react";

const SingleContact = ({ children, link, title }) => {
  return (
    <div className="my-4">
      <span className="text-3xl text-white">{children}</span>
      <p className="text-white">{title}</p>
      <p className="text-white">{link}</p>
    </div>
  );
};

export default SingleContact;
