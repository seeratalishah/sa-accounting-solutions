import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import {
  primaryButton,
  whiteHeadingStyles,
  whiteLongParaStyles,
} from "../../../utilities/cssHelper";
import { useNavigate } from "react-router-dom";

import lightSwooshBottom from "../../../assets/light-swoosh-bottom.svg";
import lightSwooshTop from "../../../assets/light-swoosh-top.svg";
import { FaCalendar } from "react-icons/fa6";

const ScheduleConsult = () => {
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
              className={`text-center mb-5 ${whiteHeadingStyles}`}
            >
              Ready for a better accounting experience?
            </Typography>
            <Typography
              variant="paragraph"
              className={`text-center mb-5 ${whiteLongParaStyles}`}
            >
              Don’t wait; take control of your finances. Schedule your free
              consult today.
            </Typography>
          </div>
          <div>
            <a href="#" className="inline-block">
              <Button
                size="md"
                className={`flex items-center gap-2 ${primaryButton}`}
                onClick={() => navigate("/contact")}
              >
                <FaCalendar size={18} />
                <span className="text-[16px]">Schedule A Consult</span>
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

export default ScheduleConsult;
