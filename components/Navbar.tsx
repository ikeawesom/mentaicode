"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useThemeContext, { LightCheck } from "@/contexts/ThemeContext";

import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "./ThemeIcons.js";
import { INITIAL_ANIM_TIME } from "@/constants.js";

const NAVIGATION_LINKS = [
  { title: "About", link: "/about" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Shop", link: "/shop" },
  { title: "Blog", link: "/blog" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useThemeContext();

  function curPage(link: string) {
    return pathname === link;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: INITIAL_ANIM_TIME, ease: "easeInOut" },
      }}
      className={`flex items-center justify-center w-full fixed top-0 left-0 bg-transparent`}
    >
      <div className="flex justify-between items-center w-[1200px] max-w-[1200px] py-5 px-10">
        <Link href={"/"} className="flex gap-3 items-center justify-start">
          <Image
            src={"/assets/icons/SVG/icon-large-1.svg"}
            alt="Mentaicode"
            width={40}
            height={40}
          />
          {LightCheck() ? (
            <Image
              src={"/assets/images/header-light.svg"}
              alt="Mentaicode"
              width={200}
              height={10}
            />
          ) : (
            <Image
              src={"/assets/images/header-dark.svg"}
              alt="Mentaicode"
              width={200}
              height={10}
            />
          )}
        </Link>

        <nav>
          <ul className="flex justify-between gap-10 items-center">
            {NAVIGATION_LINKS.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`hover:text-primary duration-150 group relative
                 ${
                   curPage(item.link)
                     ? "text-primary"
                     : LightCheck()
                     ? "text-custom-black"
                     : "text-custom-white"
                 }`}
              >
                {item.title}

                <span
                  className={`h-[2.2px] inline-block bg-primary rounded-full 
                  absolute -bottom-0.5 left-0 group-hover:w-full transition-[width] ease-in-out duration-500 ${
                    curPage(item.link) ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
            <button
              className={
                LightCheck() ? "text-custom-white" : "text-custom-black"
              }
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {LightCheck() ? (
                <SunIcon className="fill-custom-white" />
              ) : (
                <MoonIcon className="fill-custom-white" />
              )}
            </button>
          </ul>
        </nav>
      </div>
    </motion.div>
  );
}
