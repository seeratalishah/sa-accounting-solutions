import React from "react";
import Testimonial from "../../components/Testimonials";
import EmailContact from "./components/EmailContact";
import CalendlyMeeting from "./components/CalendlyMeeting";

const ContactPage = () => {
  return (
    <>
      <section className="mt-[180px] mb-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <CalendlyMeeting />
        </div>
      </section>
      <section className="my-[60px]">
        <EmailContact />
      </section>
      <section className="my-[60px] px-8">
        <div className="max-w-[1300px] mx-auto">
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default ContactPage;
