import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { cardParaStyles, cardTitle, longParaStyles } from "../utilities/cssHelper";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const TestimonialCard = ({ item }) => {
  return (
    <Card
      color="transparent"
      shadow={false}
      className="w-full max-w-[46rem] border border-gray-200 p-4"
    >
      <CardHeader
        color="transparent"
        floated={false}
        shadow={false}
        className="mx-0 flex items-center gap-4 pt-0 pb-8"
      >
        {item.avatar ? (
          <Avatar
            size="lg"
            variant="circular"
            src={item.avatar}
            alt={item.userName}
          />
        ) : (
          <div className="flex items-center justify-center w-[75px] h-[58px] bg-blue-600 rounded-full text-white text-lg font-bold">
            {item.userName.charAt(0)}
          </div>
        )}
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <Typography variant="lead" className={cardTitle}>
              {item.userName}
            </Typography>
            <div className="5 flex items-center gap-0">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <Typography variant="lead" className="text-md font-normal text-black-100 font-headingFont">
            {item.position}
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="mb-6 p-0">
        <Typography variant="paragraph" className={cardParaStyles}>
          &quot;{item.comment}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
};

export default TestimonialCard;
