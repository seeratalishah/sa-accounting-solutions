import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import {
  primaryButton,
  whiteHeadingStyles,
  whiteLongParaStyles,
} from "../../../utilities/cssHelper";

import bibdImage from "../../../assets/sa-img.png";
import { useNavigate } from "react-router-dom";

export function BIBDCard() {
  const navigate = useNavigate();
  return (
    <Card
      shadow={false}
      className="relative grid h-[30rem] w-full items-center justify-center overflow-hidden text-center rounded-[32px]"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none"
        style={{
          backgroundImage: `url(${bibdImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(8px)", // Apply blur effect
        }}
      >
        <div className="to-bg-black-90 absolute inset-0 h-full w-full bg-gradient-to-t from-black-100/100 via-black-100/50" />
      </CardHeader>
      <CardBody className="relative px-6 md:px-12">
        <Typography
          variant="h1"
          color="white"
          className={`text-center mb-5 ${whiteHeadingStyles}`}
        >
          Better Information. Better Decisions.
        </Typography>
        <Typography
          variant="paragraph"
          className={`text-center mb-5 ${whiteLongParaStyles}`}
        >
          Actionable insights delivered how and when you need them.
        </Typography>
        <Button
          size="md"
          className={primaryButton}
          onClick={() => navigate("/solutions")}
        >
          <span className="text-[16px]">Find Out What We Do</span>
        </Button>
      </CardBody>
    </Card>
  );
}
