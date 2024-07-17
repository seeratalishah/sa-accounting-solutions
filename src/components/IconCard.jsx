import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export function IconCard({ item, IconComponent, iconColor }) {
  return (
    <Card className="w-full border border-grey-50 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      <CardBody className="flex flex-col items-center">
        <IconComponent size={44} className={`mb-1 ${iconColor}`} />
        <Typography variant={iconColor ? "h1" : "h5"} color="blue-gray" className="mb-2 text-center font-headingFont">
          {item.title}
        </Typography>
        {
          item.blueText && <Typography className="text-center font-paraFont text-blue-600 mb-0">{item.blueText}</Typography>
        }
        <Typography className="text-center font-paraFont text-lightText-50">{item.desc}</Typography>
      </CardBody>
    </Card>
  );
}
