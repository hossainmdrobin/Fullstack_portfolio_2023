'use client'
import React, { useState } from "react";
import SingleTab from "./SingleTab";
import { AiFillHome,AiFillContacts,AiFillBook,AiTwotonePhone,AiFillIdcard,AiFillProject,AiFillPushpin,AiOutlineSketch } from "react-icons/ai";
const navObj = [
  {
    id:1,
    element:<AiFillHome />,
    label:"Home",
    url:"#Home"
  },
  {
    id:2,
    element:<AiTwotonePhone />,
    label:"Contact",
    url:"#Contact"
  },
  {
    id:3,
    element:<AiFillBook />,
    label:"Projects"
  },
  {
    id:4,
    element:<AiFillIdcard />,
    label:"Experience",
    url:"#Experience"
  },  
]
const Navbar = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="fixed bottom-4 w-full flex justify-center">
      <div className="flex justify-between  w-[250px] max-w-[1200px] z-50 backdrop-blur-lg py-2 rounded-full px-3">        
        <div className="flex justify-between w-[250px]">
          {navObj.map((item, i)=><SingleTab key={item.id} {...{ item, i, index, setIndex}} >{item.element}</SingleTab>)}          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
