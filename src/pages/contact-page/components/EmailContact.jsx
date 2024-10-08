import React, { useRef, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  primaryButton,
  whiteHeadingStyles,
  whiteLongParaStyles,
} from "../../../utilities/cssHelper";
import { IoMdMail } from "react-icons/io";
import {
  FaUser,
  FaBuilding,
  FaPhone,
  FaEnvelope,
  FaComments,
  FaPhoneAlt,
} from "react-icons/fa";
import { BsFillSendFill } from "react-icons/bs";

import blueSwooshBottom from "../../../assets/blue-swoosh-bottom.svg";
import blueSwooshTop from "../../../assets/blue-swoosh-top.svg";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const EmailContact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Ensure the form is valid before sending the email
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm("service_gukczln", "template_yj40hdh", form.current, {
        publicKey: "uQ2I6IiFN51lqLN0T",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Submited Successfully");
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={blueSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div
        className="bg-[#31B0D0] w-full flex items-center justify-center py-16 px-8"
        id="contact-form"
      >
        <div className="flex flex-col items-center gap-4 w-full max-w-5xl">
          <div className="flex flex-col items-center justify-center pb-10 text-center">
            <Typography variant="h1" className={whiteHeadingStyles}>
              Send us an Email
            </Typography>
            <Typography
              variant="paragraph"
              className={`mt-2 mb-10 ${whiteLongParaStyles}`}
            >
              
Not ready for a call but have questions? Use the form below to send us a message, and we’ll get back to you promptly.
            </Typography>
            <div className="flex flex-row justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 md:gap-4 cursor-pointer hover:text-gray-700">
                <IoMdMail size={28} className="text-white " />
                <Typography
                  variant="small"
                  className={`${whiteLongParaStyles}`}
                >
                  info@saaccountingsolutions
                </Typography>
              </div>
              <div className="flex items-center gap-2 md:gap-4 cursor-pointer hover:text-gray-700">
                <FaPhoneAlt size={24} className="text-white" />
                <Typography
                  variant="small"
                  className={`${whiteLongParaStyles}`}
                >
                  (416) 824-6950
                </Typography>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-400 w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center space-y-4 bg-white rounded-[32px] p-8 w-full"
            >
              <div className="flex flex-col md:flex-row items-center w-full gap-4">
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 items-center">
                    <FaUser className="text-gray-700" />
                    <span className="text-gray-700">Name</span>
                  </div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter full name"
                    required
                    className="flex-grow p-2 rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 items-center">
                    <FaBuilding className="text-gray-700" />
                    <span className="text-gray-700">Company</span>
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Enter company name"
                    className="flex-grow p-2 rounded border border-gray-300"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center w-full gap-4">
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 items-center">
                    <FaPhone className="text-gray-700" />
                    <span className="text-gray-700">Phone Number</span>
                  </div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Phone Number"
                    className="flex-grow p-2 rounded border border-gray-300"
                  />
                </div>
                <div className="flex flex-col w-full gap-2">
                  <div className="flex gap-2 items-center">
                    <FaEnvelope className="text-gray-700" />
                    <span className="text-gray-700">Email</span>
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email Address"
                    required
                    className="flex-grow p-2 rounded border border-gray-300"
                  />
                </div>
              </div>

              <div className="flex flex-col w-full gap-2">
                <div className="flex gap-2 items-center">
                  <FaComments className="text-gray-700" />
                  <span className="text-gray-700">Comments</span>
                </div>
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  required
                  className="flex-grow p-2 rounded border border-gray-300 h-24"
                />
              </div>
              <div className="flex justify-end w-full">
                {/* <div className="flex items-center w-full md:w-auto">
                  <input
                    type="checkbox"
                    name="agree"
                    required
                    className="mr-2"
                  />
                  <label
                    htmlFor="agree"
                    className="text-blue-600 text-sm leading-[0.5] md:text-md"
                  >
                    I agree with the{" "}
                    <a
                      href="/privacy-policy"
                      className="underline hover:text-blue-700 text-sm leading-[0.5] md:text-md"
                    >
                      privacy policy
                    </a>
                    .
                  </label>
                </div> */}
                <Button type="submit" className={`flex items-center gap-2 ${primaryButton}`}>
                  <BsFillSendFill size={20} />
                  <span className="text-[16px]">{isLoading ? "Please wait..." : "Submit"}</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={blueSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default EmailContact;
