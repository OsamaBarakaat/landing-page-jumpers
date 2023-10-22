import React from "react";
import Slider from "react-slick";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0">
          <div className="py-4">
            <h2 className="py-3 text-3xl text-teal-700 font-bold">
              Customer Feedback
            </h2>
            <p className="text-slate-700">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>
          </div>

          <Slider {...settings}>
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
