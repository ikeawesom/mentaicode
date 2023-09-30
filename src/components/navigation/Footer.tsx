"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GlowBlur from "../sections/GlowBlur";
import { LightCheck } from "@/src/contexts/ThemeContext";
import { SOCIALS_LINKS } from "@/src/utils/constants";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="overflow-hidden w-full md:min-h-[45vh] min-h-[30vh] dark:border-t-[1.5px] bg-gradient-to-br dark:border-slate-700 shadow-footer from-gray-100/50 to-dark-grey/50 dark:from-slate-800/50 dark:to-custom-black/80 backdrop-blur-2xl grid place-items-center">
      <GlowBlur
        headerType={LightCheck() ? "header-dark" : "header-3"}
        force={true}
        className="opacity-60"
      />
      <div className="flex flex-col items-center justify-between gap-10 p-10">
        <Link
          href={"/"}
          className="rounded-full drop-shadow-md hover:drop-shadow-xl hover:scale-105 duration-300 ease-in-out"
        >
          <Image
            src={"/assets/icons/SVG/icon-large-1.svg"}
            alt="Mentaicode"
            width={100}
            height={100}
          />
        </Link>
        <ul className="flex flex-row gap-5">
          {SOCIALS_LINKS.map((item, index) => (
            <motion.li
              whileHover={{
                y: -5,
                opacity: 1,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.9 }}
              key={index}
              className="dark:opacity-70 opacity-50"
            >
              <Link href={item.link} target="_blank">
                {LightCheck() ? (
                  <Image
                    src={`assets/icons/SVG/socials/${item.srcLight}`}
                    alt={item.title}
                    width={25}
                    height={25}
                    className=""
                  />
                ) : (
                  <Image
                    src={`assets/icons/SVG/socials/${item.srcDark}`}
                    alt={item.title}
                    width={25}
                    height={25}
                    className=""
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
        <p className="dark:text-light-grey text-base text-dark-grey text-center">
          Copyright &copy;{" "}
          <span className="text-primary font-medium">Mentaicode</span> 2023.
          Designed and built by{" "}
          <span className="text-primary font-medium">Ike Lim</span>.
        </p>
      </div>
    </div>
  );
}
