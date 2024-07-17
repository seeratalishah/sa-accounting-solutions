import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import bibdImage from "../../../assets/sa-img.png";
  
  export function BIBDCard() {
    return (
      <Card
        shadow={false}
        className="relative grid h-[30rem] w-full items-center justify-center overflow-hidden text-center"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none"
          style={{
            backgroundImage: `url(${bibdImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)', // Apply blur effect
          }}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative px-6 md:px-12">
          <Typography
            variant="h1"
            color="white"
            className="mb-2 font-[35px] leading-[1.1] font-HeadingFont"
          >
            Better Information. Better Decisions.
          </Typography>
          <Typography variant="h5" className="mb-6 text-gray-400 font-paraFont text-white">
            Actionable insights delivered how and when you need them.
          </Typography>
          <Button size="md" className="bg-blue-600 text-sm font-paraFont">
            Find Out What We Do
          </Button>
        </CardBody>
      </Card>
    );
  }
  