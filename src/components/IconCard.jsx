import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { cardParaStyles, cardTitle } from "../utilities/cssHelper";

export function IconCard({ item, minHeight }) {
  return (
    <Card className={`w-full border border-grey-50 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 min-h-[${minHeight}px]`}>
      <CardBody className="flex flex-col items-center">
        <img src={item.icon} alt="icon" className="mb-6" />
        <Typography variant="lead" className={`mb-3 ${cardTitle}`}>
          {item.title}
        </Typography>
        <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}><span className="text-blue-600">{item.blueText && item.blueText}</span> {item.desc}</Typography>
      </CardBody>
    </Card>
  );
}
