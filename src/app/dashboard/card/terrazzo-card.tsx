import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import Image from "next/image";

function TerrozzaCard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-0 p-2">
        {groupvi.map((item, index) => (
          <Card
            key={index}
            className=" z-10 p-2 rounded-none shadow-none border border-none"
          >
            <CardContent className="p-0 overflow-hidden rounded-none">
              <div className=" relative w-full aspect-[1/1.718] ">
                <Image
                  src={item.img}
                  alt={item.label}
                  priority
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </CardContent>
            <CardFooter className="p-0 flex  text-xl font-extralight -mt-4">
              <p className="whitespace-nowrap  text-ellipsis uppercase">
                {item.label}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TerrozzaCard;
