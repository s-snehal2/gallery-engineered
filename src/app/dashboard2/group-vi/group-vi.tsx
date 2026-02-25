"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React, { useState } from "react";
import Image from "next/image";
import { groupvi } from "./data";
import { GroupVI } from "./type";

function Group_VI() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem: GroupVI | undefined = groupvi.find(
    (item) => item.id === selectedId,
  );

  // FULLSCREEN VIEW
  if (selectedItem) {
    return (
      <div
        className="fixed inset-0 bg-primary/40 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={() => setSelectedId(null)}
      >
        {/* Image Container */}
        <div
          className="relative w-[90%] max-w-6xl h-[70vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={selectedItem.img}
            alt={selectedItem.label}
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div>
      <p className="px-4 font-bold">Group-VI</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 p-2 border border-t">
        {groupvi.map((item) => (
          <Card
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="cursor-pointer p-2 rounded-none shadow-none border-none group"
          >
            <CardContent className="p-0 overflow-hidden">
              <div className="relative w-full aspect-[1/1.718] overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </CardContent>

            <CardFooter className="p-0 flex text-xl font-extralight -mt-4">
              <p className="whitespace-nowrap uppercase">{item.label}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Group_VI;
