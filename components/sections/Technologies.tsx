"use client";

import React from "react";
import { LightCheck } from "@/contexts/ThemeContext";

export default function TechnologiesSection() {
  return (
    <div className="w-full flex relative gap-10">
      <div className="flex flex-col gap-3">
        <h1
          className={`${
            LightCheck() ? "header-light-1 drop-shadow-md" : "header-dark-1"
          } lg:w-[860px] md:w-[620px] sm:w-[500px] max-[639px]:text-5xl max-[320px]:text-4xl z-20`}
        >
          Popular frameworks I work with.
        </h1>
        <p className={LightCheck() ? "text-dark-grey" : "text-light-grey"}>
          Using a mixture of extensive technologies, I strive to make brilliant
          web and native applications using simple yet effective tech stacks to
          build clients dreams.
        </p>
      </div>

      <div>Google</div>
    </div>
  );
}
