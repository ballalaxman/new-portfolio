import React from "react";

const Contact = () => {
  return (
    <section className="py-8 bg-[#151515]">
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
        <form className="flex flex-col gap-4 my-4">
          <input
            type="text"
            placeholder="Name"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
          />
          <input
            type="text"
            placeholder="Email"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="py-2 px-3 w-full bg-transparent border border-gray-400 rounded-lg"
            rows={5}
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
