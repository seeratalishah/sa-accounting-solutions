import { Typography, Button } from "@material-tailwind/react";
import { primaryButton, secondaryButton } from "../utilities/cssHelper";
import { useNavigate } from "react-router-dom";

export function ImageCard({ item }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-full border border-gray-200 rounded-lg py-6 px-4 shadow-lg">
      <img src={item.icon} alt="icon" />
      <Typography variant="h1" className={`text-center text-[20px] text-blue-600 mb-2 font-headingFont font-bold`}>
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
