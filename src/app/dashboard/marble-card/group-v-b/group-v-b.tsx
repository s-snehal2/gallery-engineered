"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { groupvb } from "./data";

function Group_VB() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedItem = groupvb.find((d) => d.id === selectedId);

  return (
    <div className="relative border border-b">
      {/* GRID VIEW */}
      <div className={`${selectedItem ? "blur-sm" : ""}`}>
        <p className="px-4 font-bold">Group-V-B</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0 p-2 ">
          {groupvb.map((d) => (
            <Card
              key={d.id}
              onClick={() => setSelectedId(d.id)}
              className="cursor-pointer p-2 rounded-none shadow-none border-none group"
            >
              <CardContent className="p-0 overflow-hidden w-full">
                <div className="relative w-full aspect-[1/1.760] overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </CardContent>

              <CardFooter className="p-0 flex text-lg font-normal -mt-4">
                <p className="whitespace-nowrap uppercase ">{d.label}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-primary/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedId(null)}
        >
          <div
            className="relative w-[70%] h-[90%]"
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
      )}
    </div>
  );
}

export default Group_VB;
