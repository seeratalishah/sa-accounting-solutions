import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { cardBlueParaStyles, cardParaStyles, headingStyles } from "../../../utilities/cssHelper";

const CalendlyMeeting = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const injectCustomStyles = () => {
      const iframe = document.querySelector(".calendly-inline-widget iframe");
      if (iframe) {
        const iframeDoc =
          iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          const style = document.createElement("style");
          style.innerHTML = `
            .calendly-badge-widget,
            .calendly-inline-widget .calendly-power {
              display: none !important;
            }
            .calendly-inline-widget .calendly-container .calendly-container-title {
              display: none !important;
            }
            .calendly-inline-widget .calendly-event-type-container {
              display: none !important;
            }
              .simplebar-content{
              display: none !important;
              }
              .VJL48qbQzWENTFAh1Knk e9TS9yoMqqIN2PqBo1QG _i6SG2jlTfccH2ZZblil{
              display: none !important;
              }
            .Rb2e9IwsOFiKlSQIX7YA{
              display: none important;
              }
            /* Add more custom styles here */
          `;
          iframeDoc.head.appendChild(style);
        }
      }
    };

    const checkIframeLoad = () => {
      const iframe = document.querySelector(".calendly-inline-widget iframe");
      if (iframe) {
        iframe.onload = () => injectCustomStyles();
      }
    };

    checkIframeLoad();
  }, []);

  return (
    <div className="w-full">
      <div>
        <Typography variant="h1" className={headingStyles}>
          Our Ethos.
        </Typography>
        <Typography variant="paragraph" className={cardParaStyles}>
          The values that drive our business, our solutions and our brand.
        </Typography>
        <Typography variant="lead" className={`mb-10 ${cardBlueParaStyles}`}>
          This is what makes us tick.
        </Typography>
      </div>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/seeratalyshah/30-minute-meeting"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
};

export default CalendlyMeeting;
