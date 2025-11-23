import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContectPage = () => {
  console.log("updated");
  const form = useRef();

  const [submitHandler, setSubmitHandler] = useState(false);

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  function sendMail(e) {
    e.preventDefault();
    console.log(SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY);

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // show friendly UI error instead of crashing
      console.error("EmailJS environment variables are not set.");
      return;
    }

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        alert("Sent!");
        setSubmitHandler(true);

        setTimeout(() => {
          setSubmitHandler(false);
          form.current.reset();
        }, 4000);
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send — try again later.");
      });
  }

  //  ref={user_name} ref={user_email}ref={user_msg}
  return (
    <form
      ref={form}
      onSubmit={sendMail}
      id="contact"
      className=" bg-stone-200 bg-opacity-50 rounded-3xl py-8  container min-h-80   w-full m-auto    p-4 sm:p-4 md:p-8 lg:p-12  "
    >
      {submitHandler && (
        <h1 className="text-center bg-stone-200 mx-auto my-8 text-green-500 font-semibold  rounded-lg py-2 flex  justify-center">
          messege send successfully
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
              clipRule="evenodd"
            />
          </svg>
        </h1>
      )}

      <h1 className=" font-extrabold text-4xl my-5 text-white">
        Get in touch !!
      </h1>

      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-4  font-medium ">
        {/* <label>Name</label> */}
        <input
          type="text"
          name="to_name"
          className=" bg-stone-900 py-2  rounded-xl  outline-none text-neutral-300 text-lg px-4 placeholder:text-neutral-500  "
          placeholder="name"
        />

        {/* <label>Email</label> */}
        <input
          type="email"
          name="from_name"
          className=" bg-stone-900 p-2  rounded-xl   outline-none text-neutral-300  text-lg px-4  placeholder:text-neutral-500  "
          placeholder="xyz@email.com"
        />

        {/* <label>Message</label> */}
        <textarea
          name="message"
          className="md:col-span-2 lg:col-span-2 resize-none  bg-stone-900  rounded-xl h-40 outline-none text-neutral-300  text-lg px-4 py-2  placeholder:text-neutral-500  "
          placeholder="hey ! ... nice portfolio"
        />

        <div className="flex items-center w-fit px-8 py-2  bg-pink-300 rounded-2xl font-bold  cursor-pointer  h-8 ">
          {!submitHandler ? (
            <input
              type="submit"
              value="Send "
              className=" text-center  cursor-pointer text-black"
            />
          ) : (
            <input
              type="submit"
              value="sent successfully "
              className=" text-center  cursor-pointer text-black"
            />
          )}
        </div>
      </div>
    </form>
  );
};

export default ContectPage;
