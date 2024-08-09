import React, { useState } from "react";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const phoneNumber = "(416) 824-6950";
const email = "info@saaccountingsolutions";

const locations = [
  {
    address: "7 King St E, Toronto, ON M5C 3C5, Canada",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.482226206379!2d-79.37721288450157!3d43.64911507912117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b1fbb8ef%3A0x46384c5cb45b4dfd!2s7%20King%20St%20E%2C%20Toronto%2C%20ON%20M5C%203C5%2C%20Canada!5e0!3m2!1sen!2sus!4v1622922763445!5m2!1sen!2sus",
  },
  {
    address: "2895 Hazelton Pl #18, Mississauga, ON L5M 6J3, Canada",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.7743458031976!2d-79.76241978450143!3d43.57432317912148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b439e63e5a3d9%3A0x46384c5cb45b4dfd!2s2895%20Hazelton%20Pl%20%2318%2C%20Mississauga%2C%20ON%20L5M%206J3%2C%20Canada!5e0!3m2!1sen!2sus!4v1622922763445!5m2!1sen!2sus",
  },
  {
    address: "40 Wynford Dr #303, North York, ON M3C 1J5, Canada",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.678457576416!2d-79.35042468450145!3d43.72515797912146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b341d44b8d3d7%3A0x473c984dcb45b7ff!2s40%20Wynford%20Dr%20%23303%2C%20North%20York%2C%20ON%20M3C%201J5%2C%20Canada!5e0!3m2!1sen!2sus!4v1622922763450!5m2!1sen!2sus",
  },
  {
    address: "20 Bruyeres Mews Unit 2606, Toronto, ON M5V 0G8, Canada",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1189735673284!2d-79.39865828450232!3d43.6393858791214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d6b1fbb8ef%3A0x473c984dcb45b7ff!2s20%20Bruyeres%20Mews%20Unit%202606%2C%20Toronto%2C%20ON%20M5V%200G8%2C%20Canada!5e0!3m2!1sen!2sus!4v1622922763455!5m2!1sen!2sus",
  },
];

const GoogleMapsLocation = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 w-full p-10 border border-gray-300 rounded-[32px]">
      <div className="flex flex-col gap-6 md:w-[30%] w-full">
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Phone Number</span>
          <div className="flex gap-2 items-start">
            <FaPhone size={20} className="mt-1 text-blue-600" />
            <span >{phoneNumber}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">Email</span>
          <div className="flex gap-2 items-start">
            <IoMdMail   size={22} className="mt-1 text-blue-600" />
            <span >{email}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Addresses</span>
          {locations.map((location, index) => (
            <div
              key={index}
              className={`mb-2 cursor-pointer`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex gap-2 items-start">
                <FaLocationDot size={20} className="mt-1 text-blue-600" />
                <span
                  className={`hover:text-blue-600 hover:underline ${
                    selectedLocation.address === location.address
                      ? "text-blue-600 underline"
                      : ""
                  }`}
                >
                  {location.address}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:w-[70%] w-full mt-6 md:mt-0">
        <iframe
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={selectedLocation.mapSrc}
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapsLocation;
