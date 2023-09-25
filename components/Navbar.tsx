"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { LightCheck } from "@/contexts/ThemeContext";
import { LOGO_WIDTH, LOGO_WORD_WIDTH } from "@/constants.js";
import NavigationLinks from "./NavigationLinks";
import { MenuIcon } from "./ThemeIcons";
import DivFadeUp from "./animations/DivFadeUp";

export default function Navbar() {
  const [navVisible, setNavVisibility] = useState(false);

  return (
    <div
      className={`flex items-center justify-center w-full fixed top-0 z-20 `}
    >
      <DivFadeUp className="flex justify-between items-center w-[1200px] max-w-[1200px] py-5 px-10">
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
      </DivFadeUp>
    </div>
  );
}
