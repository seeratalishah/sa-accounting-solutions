import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  cardBlueParaStyles,
  cardParaStyles,
  headingStyles,
  primaryButton,
  subBlueHeadingStyles,
} from "../../../utilities/cssHelper";

const CalendlyMeeting = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-4 lg:gap-8">
      <div className="w-full lg:w-1/2">
        <Typography variant="h1" className={headingStyles}>
          Contact SA Accounting Solutions.
        </Typography>
        <Typography variant="lead" className={`mb-6 ${subBlueHeadingStyles}`}>
          Ready to take the next step towards financial success?
        </Typography>
        <Typography variant="paragraph" className={cardParaStyles}>
          <strong className="font-bold">Schedule A Consultation with Ledgerly today!</strong> Our
          expert team is here to discuss your unique needs and tailor our
          services to meet your goals. To set up your consultation, simply use
          the calendar to schedule a time that works for you.
        </Typography>
        <Typography variant="paragraph" className={`my-10 ${cardParaStyles}`}>
          We look forward to helping you achieve financial excellence.
        </Typography>
        <div>
          <a href="#contact-form" className="inline-block">
            <Button size="md" className={primaryButton}>
              <span className="text-[16px]">Still Have Questions?</span>
            </Button>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://calendly.com/seeratalyshah/30-minute-meeting?hide_event_type_details=1&text_color=283236&primary_color=31b0d0"
          frameBorder="0"
          className="calendly-inline-widget h-[500px] lg:h-[700px] w-full border border-gray-200 rounded-[32px] shadow-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default CalendlyMeeting;
