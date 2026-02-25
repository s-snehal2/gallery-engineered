"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";
import { groupix } from "./data";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Group_IX() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem = selectedIndex !== null ? groupix[selectedIndex] : null;

  const closeModal = () => setSelectedIndex(null);

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === groupix.length - 1 ? 0 : selectedIndex + 1,
    );
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex(
      selectedIndex === 0 ? groupix.length - 1 : selectedIndex - 1,
    );
  };

  return (
    <div className="relative border border-b">
      {/* GRID */}
      <div className={selectedItem ? "blur-sm" : ""}>
        <p className="px-4 font-bold">Group-IX</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 p-2">
          {groupix.map((item, index) => (
            <Card
              key={item.id}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer p-2 rounded-none shadow-none border-none group"
            >
              <CardContent className="p-0 overflow-hidden w-full">
                <div className="relative w-full aspect-[1/1.760] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.label}
                    fill
                    className="object-cover  "
                  />
                </div>
              </CardContent>

              <CardFooter className="p-0 text-lg font-normal -mt-4">
                <p className="uppercase">{item.label}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-primary/75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-6xl  md:h-[10vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* LEFT ARROW */}
            <ChevronLeft
              onClick={goPrev}
              className="absolute left-4 md:left-8 cursor-pointer size-10 md:size-14 text-secondary hover:scale-110 transition z-50"
            />

            {/* IMAGE CONTAINER */}
            <div className="w-full flex flex-col items-center">
              {/* LABEL */}
              <p className="text-secondary text-xl font-semibold uppercase mb-4">
                {selectedItem.label}
              </p>

              {/* IMAGE WRAPPER */}
              <div className="relative w-full h-[20vh] md:h-[65vh] lg:h-[65vh]">
                <Image
                  src={selectedItem.img}
                  alt={selectedItem.label}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* RIGHT ARROW */}
            <ChevronRight
              onClick={goNext}
              className="absolute right-4 md:right-8 cursor-pointer size-10 md:size-14 text-secondary hover:scale-110 transition z-50"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Group_IX;
