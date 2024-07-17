import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export function GoodFitCard() {
  return (
    <Card className="w-full sm:flex-row md:flex-row lg:flex-row flex-col bg-[#283236] h-[500px]">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full sm:w-2/5 shrink-0 rounded-r-none relative"
      >
        <div className="absolute top-0 left-0 w-full h-full sm:block hidden">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover blur-sm"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        </div>
        <div className="absolute top-10 left-0 w-full h-full flex justify-center items-start sm:items-center">
          <Typography
            variant="h1"
            color="white"
            className="font-bold text-center font-headingFont sm:text-xl text-3xl"
          >
            Your Heading Here
          </Typography>
        </div>
      </CardHeader>
      <CardBody>
        <Typography
          color="gray"
          className="mb-4 lg:mb-8 font-normal text-white text-sm sm:text-md md:text-lg lg:text-lg font-paraFont"
        >
          We are ambitious accounting professionals turned disruptive
          entrepreneurs who noticed that the accounting industry wasn’t evolving
          with the times or with the needs of small business owners in mind.
        </Typography>
        <Typography
          color="gray"
          className="mb-4 lg:mb-8 font-normal text-white text-sm sm:text-md md:text-lg lg:text-lg font-paraFont"
        >
          Having significant knowledge and insight into the world of accounting,
          technology and business process optimization, we formed Ledgerly to
          re-shape the accounting industry to engage and excite small business
          owners with better, faster and technology driven accounting services.
        </Typography>
        <a href="#" className="inline-block">
          <Button
            variant="text"
            className="flex items-center gap-1 lg:gap-2 text-white text-[12px] sm:text-md md:text-lg lg:text-lg font-paraFont"
          >
            Find Out If We're A Good Fit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
  );
}
