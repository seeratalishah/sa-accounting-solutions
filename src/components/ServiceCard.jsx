import { Card, CardBody, Typography } from "@material-tailwind/react";
import { cardParaStyles } from "../utilities/cssHelper";

export function ServiceCard({ item, minHeight }) {
  return (
    <Card className={`w-full border border-grey-50 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 min-h-[${minHeight}px]`}>
      <CardBody className="flex flex-col items-center">
        <img src={item.icon} alt="icon" className="mb-6"/>
        <Typography variant="h1" className={`mb-3 text-center text-[22px] text-black-100 font-headingFont font-bold`}>
          {item.title}
        </Typography>
        <Typography
          variant="paragraph"
          className={`text-center ${cardParaStyles}`}
        >
          {item.desc}
        </Typography>
      </CardBody>
    </Card>
  );
}
