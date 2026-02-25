"use client";

import { useState } from "react";
import TerrazzoCard from "./terrazzo-card/page";
import QuartzCard from "./quartz-card/page";
import MarbleCard from "./marble-card/page";

function Page() {
  const [activeTab, setActiveTab] = useState("terrazzo");

  return (
    <div>
      {/* Title Buttons */}
      <div className="flex justify-center items-center gap-10 font-semibold cursor-pointer py-4">
        <p
          onClick={() => setActiveTab("terrazzo")}
          className={`${
            activeTab === "terrazzo"
              ? "text-primary border-b-2 border-primary"
              : ""
          }`}
        >
          TERRAZZO
        </p>

        <p
          onClick={() => setActiveTab("quartz")}
          className={`${
            activeTab === "quartz"
              ? "text-primary border-b-2 border-primary"
              : ""
          }`}
        >
          QUARTZ
        </p>

        <p
          onClick={() => setActiveTab("marble")}
          className={`${
            activeTab === "marble"
              ? "text-primary border-b-2 border-primary"
              : ""
          }`}
        >
          MARBLE
        </p>
      </div>

      {/* Section Rendering */}
      <div>
        {activeTab === "terrazzo" && <TerrazzoCard />}
        {activeTab === "quartz" && <QuartzCard />}
        {activeTab === "marble" && <MarbleCard />}
      </div>
    </div>
  );
}

export default Page;
