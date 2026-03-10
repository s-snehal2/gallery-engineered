"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Item } from "./type";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

function ArtificialGroupItem({ items }: { items: Item[] }) {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const closeModal = () => setSelectedItem(null);

  const groups = items.map((item) => item.group);
  const uniqueGroups = [...new Set(groups)];

  return (
    <div className="relative border-b">
      {/* GRID */}
      <div className={selectedItem !== null ? "blur-sm" : ""}>
        {uniqueGroups.map((group) => (
          <div key={group}>
            <p className="px-4 font-semibold text-sm mt-4  text-primary flex justify-center items-center md:block">
              Group-{group}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-2 border-b -mt-2">
              {items.map((item, index) => {
                if (item.group !== group) return null;

                return (
                  <Card
                    key={item.id}
                    onClick={() => setSelectedItem(index)}
                    className="cursor-pointer p-2 rounded-none shadow-none border-none"
                  >
                    <CardContent className="p-0 overflow-hidden">
                      <div className="relative w-full aspect-[1/0.960] md:aspect-[1/1.460]">
                        <Image
                          src={item.img}
                          alt={item.label}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="p-0 text-sm -mt-4">
                      <p className="uppercase">{item.label}</p>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedItem !== null && (
        <div
          className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div className="w-full ">
            <Carousel
              className="w-full"
              opts={{ startIndex: selectedItem ?? 0 }}
            >
              <CarouselContent>
                {items.map((item) => (
                  <CarouselItem
                    key={`${item.group}-${item.id}`}
                    className="flex items-center justify-center h-screen w-full"
                  >
                    <div className=" flex flex-col ">
                      {/* GROUP + ICON ROW */}
                      <div className="flex justify-between items-end  w-full">
                        <p className="text-secondary text-xs md:text-lg uppercase p-2">
                          {item.groupName}-{item.group}
                        </p>

                        <div className="flex items-center gap-1 md:gap-2 p-2">
                          {/* ICONS */}

                          <Button
                            size="icon-sm"
                            variant="ghost"
                            className="rounded-full"
                          >
                            <Image
                              src="./whatsapp.svg"
                              alt="whatsapp"
                              width={100}
                              height={100}
                              className="size-6 md:size-8"
                            />
                          </Button>
                          <Button
                            size="icon-sm"
                            variant="ghost"
                            className="rounded-full"
                          >
                            <Image
                              src="./url.svg"
                              alt="url"
                              width={100}
                              height={100}
                              className="size-6 md:size-8"
                            />
                          </Button>

                          <Button
                            size="icon-sm"
                            variant="secondary"
                            onClick={closeModal}
                            className="rounded-full shadow-none"
                          >
                            <X className="size-4 md:size-5" />
                          </Button>
                        </div>
                      </div>

                      {/* IMAGE WRAPPER */}

                      <div
                        className="relative flex items-center justify-center w-full"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={3000}
                          height={2800}
                          className="w-full max-h-[85vh] md:aspect-video  object-contain  md:object-cover md:rounded-md"
                        />

                        {/* IMAGE LABEL */}
                        <p className="absolute top-0 right-0 bg-secondary text-primary text-xs md:text-lg uppercase px-2 sm:px-3 py-1 sm:py-2 rounded-none md:rounded-tr-md ">
                          {item.label}
                        </p>

                        {/* LOGO */}
                        <div className="absolute top-0 left-0">
                          <Image
                            src="/kalingalogo.png"
                            alt="Kalinga Logo"
                            width={80}
                            height={80}
                            className="w-24 md:w-32 opacity-70 rounded-none md:rounded-tl-md"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* ARROWS */}
              <CarouselPrevious className="absolute -left-10 sm:left-2 md:left-2" />
              <CarouselNext className="absolute -right-10 sm:right-2 md:right-2" />
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtificialGroupItem;
