import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function IconButtonCard({ item, IconComponent }) {
  return (
    <Card className="w-full border border-grey-50 flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      <CardBody className="flex flex-col items-center">
        <IconComponent size={44} className="mb-1" />
        <Typography variant="h5" color="blue-gray" className="mb-2 text-center font-headingText">
          {item.title}
        </Typography>
        <Typography className="text-center font-paraText text-lightText-50">{item.desc}</Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <a href="#" className="inline-block">
          <Button size="md" className="bg-blue-600 text-sm font-paraFont">
            {item.buttonText}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
