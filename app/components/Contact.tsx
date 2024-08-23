"use client";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-8 px-5 bg-[#151515]" id="contact">
      <div className="max-w-lg mx-auto">
        <h2 className="text-gray-400 text-4xl sm:text-5xl font-bold py-2 sm:pt-5 text-center">
          Contact Me
        </h2>
        <p className="text-gray-400 tracking-wider text-center py-3">
          Get in touch with me or directly contact me on&nbsp;
          <a href="mailto:ballalaxmanrao987@gmail.com" className="font-bold">
            ballalaxmanrao987@gmail.com
          </a>
        </p>
        <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Message"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="py-2 px-4 text-black bg-green-400 rounded-lg hover:bg-green-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
