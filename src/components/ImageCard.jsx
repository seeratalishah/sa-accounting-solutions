import { Typography, Button } from "@material-tailwind/react";
import { headingStyles, primaryButton } from "../utilities/cssHelper";
import newAccounting from "../assets/faq-img.png";
import { useNavigate } from "react-router-dom";

export function ImageCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full">
      <div dangerouslySetInnerHTML={{ __html: item.svg }}></div>
      <Typography variant="h1" className={`text-center text-[22px] text-black-100 font-headingFont font-bold`}>
        {item.title}
      </Typography>
      <Button
        size="md"
        className={primaryButton}
        onClick={() => navigate(`/${item.link}`)}
      >
        <span className="text-[16px]"> Learn More</span>
      </Button>
    </div>
  );
}
