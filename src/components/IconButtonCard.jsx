import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { cardParaStyles, cardTitle, primaryButton } from "../utilities/cssHelper";

export function IconButtonCard({ item, IconComponent }) {
  return (
    <Card className="w-full border border-grey-50 flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 min-h-[410px]">
      <CardBody className="flex flex-col items-center">
        <IconComponent size={44} className={`mb-6 text-blue-600`} />
        <Typography variant="lead" className={`mb-3 ${cardTitle}`}>
          {item.title}
        </Typography>
        <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}>{item.desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="md" className={primaryButton}>
            {item.buttonText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
