import React from "react";
import SectionHeader from "../Shared/SectionHeader";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlinePhone,
} from "react-icons/ai";
import SingleContact from "./SingleContact";
import ContactForm from "./ContactForm";
import Menu from "./Menu";

const con = [
  {
    icon: <AiOutlineMail />,
    link: "hossainmdrobin967@gmail.com",
    title: "Email",
  },
  { icon: <AiOutlineWhatsApp />, link: "+880 1772784031", title: "Whatsapp" },
  { icon: <AiOutlinePhone />, link: "+880 1772784031", title: "Phone" },
];
const Contact = () => {
  return (
    <div id="Contact" className="max-w-[1000px] mx-auto p-4 min-h-screen">
      <SectionHeader title="Get in Touch" />
      <div className="md:flex items-center justify-between">
        <div className="md:w-1/2">
          {con.map((item, i) => (
            <SingleContact link={item.link} title={item.title} key={i}>
              {item.icon}
            </SingleContact>
          ))}
        </div>
        <div className="md:w-1/2">
            <ContactForm />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Contact;
