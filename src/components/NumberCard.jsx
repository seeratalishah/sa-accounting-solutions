import {
    Card,
    CardBody,
    Typography,
  } from "@material-tailwind/react";
  import { cardParaStyles, cardTitle } from "../utilities/cssHelper";
  
  export function NumberCard({ item }) {
    return (
      <Card className="w-full border border-grey-50 flex flex-col items-center justify-start transform transition-transform duration-300 hover:scale-105 md:min-h-[402px] lg:min-h-[461px]">
        <CardBody className="flex flex-col items-center">
          <div className="w-[60px] h-[60px] rounded-full flex items-center justify-center bg-blue-600 mb-4">
            <span className="text-white text-2xl font-bold">1</span>
          </div>
          <Typography variant="lead" className={`mb-3 ${cardTitle}`}>
            {item.title}
          </Typography>
          <Typography variant="paragraph" className={`text-center mb-4 ${cardParaStyles}`}>{item.desc}</Typography>
          <Typography variant="paragraph" className={`text-center ${cardParaStyles}`}>{item.desc}</Typography>
        </CardBody>
      </Card>
    );
  }
  