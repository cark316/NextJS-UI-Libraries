import Image from "next/image";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@nextui-org/react";

const PropertiesCard = () => {
  return (
    <Card className="flex w-[18vw]">
      <CardBody className="p-[1vh]">
        <Image alt="image" src="/PropImg.png" height={430} width={320} />
      </CardBody>
      <CardHeader className="px-[1vh]">
        <h1 className="text-[2.5vh] font-semibold">Seaside Serenity Villa</h1>
      </CardHeader>
      <CardFooter className="p-[1vh] flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-tiny">Price</h1>
          <p className="font-semibold">550,000$</p>
        </div>
        <Button variant="shadow" color="primary">
          View Properties
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PropertiesCard;
