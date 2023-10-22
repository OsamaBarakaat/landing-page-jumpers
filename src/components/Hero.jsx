import React from "react";
import "./style.css";
const Hero = () => {
  return (
    <section id="hero" className=" dark:bg-gray-900 py-10">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center justify-center justify-self-center mx-auto lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-teal-700 dark:text-white">
            Jumpers Platform Interactive and Media Head
          </h1>
          <p className="max-w-2xl mb-6 font-light text-slate-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Would you like to work in organizing events? Or even in TV programs
            and barista studios, do you like to be creative with coffee? Do you
            feel that you have the ability to act in secondary roles? Jumpers
            platform provides all these opportunities and more. All you have to
            do is register your data and skills and benefit from Jumpers’ many
            advantages.
          </p>
          <div className="w-full flex justify-between">
            <button
              type="button"
              class="focus:outline-none w-full md:w-full text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Looking for employees
            </button>

            <button
              type="button"
              class="focus:outline-none w-full md:w-full text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Job Seekers (Jumbers)
            </button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            // src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1925"
            alt="mockup"
            className="rounded"
            src="https://jumpersksa.com/jumper.gif"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
