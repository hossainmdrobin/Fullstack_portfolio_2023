"use client";
import React from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register } = useForm();
  return (
    <div>
      <form className="flex flex-col" action="">
        <input
          {...register("name")}
          className="my-2 focus:outline-none focus:border-2 bg-transparent border border-[#4bd5ff] rounded p-2"
          placeholder="Your name..."
          type="text"
          name=""
          id=""
        />
        <input
          {...register("email")}
          className="my-2 focus:outline-none focus:border-2 bg-transparent border border-[#4bd5ff] rounded p-2"
          placeholder="Your Email..."
          type="text"
        />
        <textarea
          {...register("message")}
          className="my-2 focus:outline-none focus:border-2 bg-transparent border border-[#4bd5ff] rounded p-2"
          placeholder="Your Message..."
          name=""
          id=""
          cols="30"
          rows="4"
        ></textarea>
        <div>
          <button className="py-1 inline px-3 border my-2 hover:bg-[#4bd5ff] rounded text-white border-[#4bd5ff]">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
