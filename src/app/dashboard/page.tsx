"use client";

import { useState } from "react";
import ArtificialGroupItem from "./artificial-group-item";
import { marbleItems, quartzItems, terrazzoItems } from "./data";

function Page() {
  const [activeTab, setActiveTab] = useState("terrazzo");

  return (
    <div>
      {/* Title Buttons */}
      <div className="flex justify-center items-center gap-6 font-semibold  py-4">
        <p
          onClick={() => setActiveTab("terrazzo")}
          className={`${
            activeTab === "terrazzo"
              ? "text-primary font-bold text-xl"
              : "font-normal text-lg"
          }`}
        >
          TERRAZZO
          {activeTab === "terrazzo" && (
            <span className="text-xs align-bottom ml-1">
              {terrazzoItems.length}
            </span>
          )}
        </p>

        <p
          onClick={() => setActiveTab("quartz")}
          className={`${
            activeTab === "quartz"
              ? "text-primary font-bold text-xl"
              : "font-normal text-lg"
          }`}
        >
          QUARTZ
          {activeTab === "quartz" && (
            <span className="text-xs align-bottom ml-1">
              {quartzItems.length}
            </span>
          )}
        </p>

        <p
          onClick={() => setActiveTab("marble")}
          className={`${
            activeTab === "marble"
              ? "text-primary font-bold text-xl"
              : "font-normal text-lg"
          }`}
        >
          MARBLE
          {activeTab === "marble" && (
            <span className="text-xs align-bottom ml-1">
              {marbleItems.length}
            </span>
          )}
        </p>
      </div>

      {/* Section Rendering */}
      <div>
        {activeTab === "terrazzo" && (
          <ArtificialGroupItem items={terrazzoItems} />
        )}
        {activeTab === "quartz" && <ArtificialGroupItem items={quartzItems} />}
        {activeTab === "marble" && <ArtificialGroupItem items={marbleItems} />}
      </div>
    </div>
  );
}

export default Page;
