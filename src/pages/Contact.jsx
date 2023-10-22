import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (e) => {
    const msg = { name, title, email, desc };
    console.log(msg);
    setIsPending(true);
    fetch("https://jumpers-api.onrender.com/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(msg),
    }).then(() => {
      toast.success("Thanks, your message sent successfully");
      setEmail("");
      setDesc("");
      setTitle("");
      setName("");
      console.log("Message Send Successfully");
      setIsPending(false);
      // navigate("/");
    });
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Contact With Us
            </h2>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center p-8 text-center bg-slate-100 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <AiOutlinePhone color="teal" size={48} />
              <div className="mx-auto mb-8 max-w-2xl text-slate-500 dark:text-gray-400">
                <h3 className="text-lg mt-12 font-medium text-slate-700 dark:text-white">
                  0551665595
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center p-8 text-center bg-slate-100 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <AiOutlineMail color="teal" size={48} />
              <div className="mx-auto mb-8 max-w-2xl text-slate-500 dark:text-gray-400">
                <h3 className="text-lg mt-12 font-medium text-slate-900 dark:text-white">
                  Info@jumpersksa.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Send Your Message
          </h2>
          <form
            target="_blank"
            onSubmit={handleSubmit(onSubmit)}
            action="https://formsubmit.co/mohamedkhairy2357@gmail.com"
            method="POST"
            className="space-y-8"
          >
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:teal-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                required=""
                value={name}
                placeholder="Your Name"
                {...register("name", {
                  required: true,
                  maxLength: 24,
                  onChange: (e) => {
                    setName(e.target.value);
                  },
                })}
                defaultValue=""
              />
              {errors.name && (
                <span className="text-red-800">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" &&
                    "max length of name is 24 characters"}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:teal-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                required=""
                value={email}
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                  onChange: (e) => {
                    setEmail(e.target.value);
                  },
                })}
                placeholder="email@gmail.com"
                defaultValue=""
              />
              {errors.email && (
                <span className="text-red-800">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </span>
              )}
            </div>

            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor="title"
              >
                Message title
              </label>
              <input
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:teal-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                type="text"
                name="title"
                id="title"
                value={title}
                {...register("title", {
                  required: true,
                  onChange: (e) => {
                    setTitle(e.target.value);
                  },
                })}
                defaultValue=""
              />
              {errors.title && (
                <span className="text-red-800">
                  {errors.title.type === "required" && "This field is required"}
                </span>
              )}
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="desc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="desc"
                name="desc"
                rows={6}
                value={desc}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:teal-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500 dark:shadow-sm-light"
                placeholder="Leave a comment..."
                defaultValue={""}
                {...register("desc", {
                  required: true,
                  onChange: (e) => {
                    setDesc(e.target.value);
                  },
                })}
              />
              {errors.desc && (
                <span className="text-red-800">
                  {errors.desc.type === "required" && "This field is required"}
                </span>
              )}
            </div>
            <button
              type="submit"
              class="focus:outline-none w-full lg:w-48 text-white bg-teal-700	 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <div className="col-span-12 py-4 px-4 mx-auto max-w-screen-xl text-center lg:py-4 lg:px-4 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124433475!2d47.15218831233023!3d24.725455368733947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2seg!4v1695079072032!5m2!1sar!2seg"
          height="450"
          className="w-full"
          style={{ border: 0 }}
          title="Region"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
