"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LightCheck } from "@/contexts/ThemeContext";

import { motion } from "framer-motion";
import { INITIAL_ANIM_TIME, LOGO_WIDTH, LOGO_WORD_WIDTH } from "@/constants.js";
import NavigationLinks from "./NavigationLinks";
import { MenuIcon } from "./ThemeIcons";

export default function Navbar() {
  const [navVisible, setNavVisibility] = useState(false);

  return (
    <div
      className={`flex items-center justify-center w-full sticky top-0 z-20 ${
        LightCheck() ? "bg-custom-white" : "bg-custom-black"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: INITIAL_ANIM_TIME, ease: "easeInOut" },
        }}
        viewport={{ once: true }}
        className="flex justify-between items-center w-[1200px] max-w-[1200px] py-5 px-10"
      >
        <Link href={"/"} className="flex gap-3 items-center justify-start">
          <Image
            src={"/assets/icons/SVG/icon-large-1.svg"}
            alt="Mentaicode"
            width={LOGO_WIDTH}
            height={LOGO_WIDTH}
          />
          {LightCheck() ? (
            <Image
              src={"/assets/images/header-light.svg"}
              alt="Mentaicode"
              width={LOGO_WORD_WIDTH}
              height={0}
            />
          ) : (
            <Image
              src={"/assets/images/header-dark.svg"}
              alt="Mentaicode"
              width={LOGO_WORD_WIDTH}
              height={0}
            />
          )}
        </Link>
        <NavigationLinks
          navVisible={navVisible}
          setNavVisible={() => setNavVisibility(!navVisible)}
        />
        <div
          className="place-items-center p-2 bg-primary rounded-full shadow-sm max-[800px]:grid hidden"
          onClick={() => setNavVisibility(!navVisible)}
        >
          <MenuIcon />
        </div>
      </motion.div>
    </div>
  );
}
