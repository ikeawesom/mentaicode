"use client";

import React from "react";
import { LightCheck } from "@/contexts/ThemeContext";
import Image from "next/image";
import { motion } from "framer-motion";
import { INITIAL_ANIM_TIME, ANIM_DELAY_FACTOR } from "@/constants";
import DivFadeUp from "../animations/DivFadeUp";
import LiFadeIn from "../animations/ListFadeIn";

const TECH_LIST = [
  { title: "NextJS", icon: "icon_next.svg" },
  { title: "ReactJS", icon: "icon_react.svg" },
  { title: "Firebase", icon: "icon_firebase.svg" },
  { title: "Supabase", icon: "icon_supabase.svg" },
  { title: "Python", icon: "icon_python.svg" },
  { title: "Git", icon: "icon_git.svg" },
];
export default function TechnologiesSection() {
  return (
    <div className="w-full grid place-items-center py-20">
      <div className="flex flex-col gap-10 max-w-6xl">
        <DivFadeUp className="flex flex-col gap-3 items-center justify-center">
          <h1
            className={`${
              LightCheck() ? "header-light-1 drop-shadow-md" : "header-dark-1"
            } lg:w-[900px] md:w-[620px] sm:w-[500px] max-[639px]:text-5xl max-[320px]:text-4xl text-center`}
          >
            Popular frameworks I work with.
          </h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: INITIAL_ANIM_TIME,
                ease: "easeInOut",
                delay: ANIM_DELAY_FACTOR,
              },
            }}
            viewport={{ once: true }}
            className={
              "text-center font-light subtext lg:w-[700px] md:w-[540px] sm:w-[450px] max-[499px]:text-md max-[320px]:text-sm " +
              (LightCheck() ? "text-custom-black" : "text-custom-white")
            }
          >
            Using a mixture of extensive technologies, I strive to make
            brilliant web and native applications using simple yet effective
            tech stacks to build dreams.
          </motion.p>
        </DivFadeUp>

        <div className="p-5">
          <ul className="list-none flex gap-x-5 gap-y-16 items-center justify-center flex-wrap">
            {TECH_LIST.map((item, index) => (
              <LiFadeIn duration={1} key={index} delay={index}>
                <div className="flex flex-col gap-2 items-center justify-center relative group hover:scale-90 ease-in-out duration-150 bg-gradient-to-br dark:from-slate-700 dark:to-slate-800 rounded-md p-10 h-full  from-gray-50 to-gray-200">
                  <Image
                    src={`assets/images/technologies/${item.icon}`}
                    alt={item.title}
                    width={80}
                    height={50}
                  />
                  <h4 className="text-sm bg-custom-black text-custom-white dark:bg-custom-white dark:text-custom-black py-1 px-4 rounded-md absolute -bottom-8 group-hover:-bottom-12 group-hover:opacity-100 opacity-0 duration-300 transition-all ease-in-out text-center">
                    {item.title}
                  </h4>
                </div>
              </LiFadeIn>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
