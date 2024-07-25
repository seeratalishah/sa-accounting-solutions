import React, { useRef } from "react";
import blueSwooshBottom from "../../../assets/blue-swoosh-bottom.svg";
import blueSwooshTop from "../../../assets/blue-swoosh-top.svg";
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
import emailjs from "@emailjs/browser";

const EmailContact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure the form is valid before sending the email
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    emailjs
      .sendForm("service_v4wodvk", "template_je82nye", form.current, {
        publicKey: "Uc3iY7KD4EE5QYJb1",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={blueSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#31B0D0] w-full flex items-center justify-center py-16 px-8">
        <div className="flex flex-col items-center gap-4 w-full max-w-5xl">
          <div className="flex flex-col items-center justify-center pb-10 text-center">
            <Typography variant="h1" className={whiteHeadingStyles}>
              Send us an Email
            </Typography>
            <Typography
              variant="paragraph"
              className={`mt-2 mb-10 ${whiteLongParaStyles}`}
            >
              Not ready for a call, but have questions? Send us a message using
              the form below and we’ll be sure to get back to you.
            </Typography>
            <div className="flex flex-row justify-center gap-6 md:gap-10">
              <div className="flex items-center gap-2 md:gap-4 cursor-pointer hover:text-gray-700">
                <IoMdMail size={28} className="text-white " />
                <Typography
                  variant="small"
                  className={`${whiteLongParaStyles}`}
                >
                  info@ledgerly.ca
                </Typography>
              </div>
              <div className="flex items-center gap-2 md:gap-4 cursor-pointer hover:text-gray-700">
                <FaPhoneAlt size={24} className="text-white" />
                <Typography
                  variant="small"
                  className={`${whiteLongParaStyles}`}
                >
                  info@ledgerly.ca
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
              <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                <div className="flex items-center w-full md:w-auto">
                  <input type="checkbox" name="agree" required className="mr-2" />
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
                </div>
                <Button type="submit" className={primaryButton}>
                  Submit
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
