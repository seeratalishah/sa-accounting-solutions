import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { cardParaStyles, cardTitle } from "../utilities/cssHelper";

export function IconCard({ item, IconComponent, iconColor }) {
  return (
    <Card className="w-full border border-grey-50 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 md:min-h-[402px] lg:min-h-[461px]">
      <CardBody className="flex flex-col items-center">
        <IconComponent size={44} className={`mb-6 text-blue-600`} />
        <Typography variant="lead" className={`mb-3 ${cardTitle}`}>
          {item.title}
        </Typography>
        <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}><span className="text-blue-600">{item.blueText && item.blueText}</span> {item.desc}</Typography>
      </CardBody>
    </Card>
  );
}
