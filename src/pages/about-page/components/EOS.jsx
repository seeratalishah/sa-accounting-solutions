import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  primaryButton,
  whiteHeadingStyles,
  whiteLongParaStyles,
} from "../../../utilities/cssHelper";

import lightSwooshBottom from "../../../assets/light-swoosh-bottom.svg";
import lightSwooshTop from "../../../assets/light-swoosh-top.svg";
import { useNavigate } from "react-router-dom";

const EOS = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      {/* Image before the main content */}
      <img src={lightSwooshTop} alt="Image Before" className="w-full" />

      {/* Main content */}
      <div className="bg-[#F3FCFE] w-full flex items-center justify-center py-16 px-8">
        <div className="max-w-[1300px] bg-black-100 px-6 py-10 w-full rounded-[32px] flex flex-col items-center justify-center">
          <div>
            <Typography
              variant="h1"
              className={`text-center ${whiteHeadingStyles}`}
            >
              Ready to transform your business’s financial future?
            </Typography>
            <Typography
              variant="paragraph"
              className={`text-center mb-10 ${whiteLongParaStyles}`}
            >
              Don’t wait; take control of your finances today.
            </Typography>
          </div>
          <div>
            <a href="#" className="inline-block">
              <Button size="md" className={primaryButton} onClick={() => navigate("/solutions")}>
              <span className="text-[16px]">Explore Our Solutions</span>
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Image after the main content */}
      <img src={lightSwooshBottom} alt="Image After" className="w-full" />
    </div>
  );
};

export default EOS;
