import React from "react";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  return (
    <section id="whoweare" className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-teal-700 dark:text-white">
            Learn about Jumpers platform
          </h2>
          <h3 className="mb-4 text-4xl tracking-tight font-bold text-slate-700 dark:text-white">
            Jumpers platform, the first digital platform of its kind
          </h3>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <Link to="/contact">
            <button
              type="button"
              class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Contact With Us
            </button>
          </Link>
        </div>
        <div className="grid  gap-4 mt-8">
          <iframe
            width="944"
            height="400"
            className="w-full text-center"
            src="https://www.youtube.com/embed/M2kF_Rzt6zU"
            title="منصة جمبرز"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
