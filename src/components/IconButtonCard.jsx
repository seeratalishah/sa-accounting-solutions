import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  cardParaStyles,
  cardTitle,
  primaryButton,
} from "../utilities/cssHelper";
import { useNavigate } from "react-router-dom";

export function IconButtonCard({ item, minHeight }) {
  const navigate = useNavigate();
  return (
    <Card className={`w-full relative border border-grey-50 flex flex-col items-center justify-start transform transition-transform duration-300 hover:scale-105 min-h-[${minHeight}px]`}>
      <CardBody className="flex flex-col items-center">
        <img src={item.icon} alt="icon" />
        <Typography variant="lead" className={`mb-3 ${cardTitle}`}>
          {item.title}
        </Typography>
        <Typography
          variant="paragraph"
          className={`text-center ${cardParaStyles}`}
        >
          {item.desc}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 absolute bottom-4">
        <Button
          size="md"
          className={primaryButton}
          onClick={() => navigate(`${item.link}`)}
        >
          <span className="text-[16px]"> {item.buttonText}</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
