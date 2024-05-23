import { IoIosMail } from "react-icons/io";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          // console.log('SUCCESS!');
          form.current.reset();
          toast.success("Message sent successfully", { autoClose: 5000 });
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong, Please try again", {
            autoClose: 5000,
          });
        }
      );
  };

  return (
    <section className="flex justify-center items-center bg-primary h-[100vh]">
      <div className="bg-secondary/60 rounded-lg md:w-3/4">
        <div className="flex flex-col justify-center items-center gap-3 p-10">
          <IoIosMail className="bg-gradient-to-r from-tertiary to-quaternary/70 p-.5 rounded-lg text-5xl text-secondary" />
          <h2 className="font-semibold text-4xl text-quaternary/90">
            Get in touch
          </h2>
          <p className="font-normal text-lg text-quaternary/80">
            Let's work together!
          </p>
        </div>
        <form
          className="flex flex-col gap-3 md:mx-auto p-10 md:w-2/4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            className="p-2 rounded text-lg outline-none"
            type="text"
            name="name"
            placeholder="Full name"
            required
          />
          <input
            className="p-2 rounded text-lg outline-none"
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <input
            className="p-2 rounded text-lg outline-none"
            type="tel"
            name="phone"
            placeholder="Phone number"
          />
          <textarea
            className="p-2 rounded text-lg outline-none resize-none"
            rows="4"
            type="text"
            name="message"
            placeholder="Message"
            required
          />
          <input
            className="bg-tertiary p-2 rounded font-medium text-lg text-quaternary/90 cursor-pointer"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
