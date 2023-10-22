import React from "react";
import { Link } from "react-router-dom";

const HomeSectors = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-teal-700 dark:text-white">
            Jumbers Sectors
          </h2>
          <h3 className="mb-4 text-4xl tracking-tight font-bold text-slate-700 dark:text-white">
            Know the sectors of work in jumbers
          </h3>
          <p className="mb-4">
            We work in all sectors and different fields of work in the Kingdom
            of Saudi Arabia, as we cover most of the Kingdom’s cities and are
            constantly expanding
          </p>
          <Link
            to="/sector"
            class="focus:outline-none w-full md:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Show More...
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeSectors;
