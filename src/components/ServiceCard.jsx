import { Card, CardBody, Typography } from "@material-tailwind/react";
import { cardParaStyles, serviceCardTitle } from "../utilities/cssHelper";

export function ServiceCard({ item }) {
  return (
    <Card className="w-full min-h-[202px] border border-grey-50 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105">
      <CardBody className="flex flex-col items-center">
        <img src={item.icon} alt="icon" className="mb-6"/>
        <Typography variant="lead" className={`mb-3 ${serviceCardTitle}`}>
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
