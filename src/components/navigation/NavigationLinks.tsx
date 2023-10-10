import React, { useEffect, useState } from "react";
import Link from "next/link";

import useThemeContext, { LightCheck } from "@/src/contexts/ThemeContext";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon, CrossIcon } from "@/src/components/ThemeIcons";
import { NAVIGATION_LINKS } from "@/src/utils/constants";
import "@/app/globals.css";
import { toast } from "sonner";

type NavLinksProps = {
  navVisible: boolean;
  setNavVisible: () => void;
};

export default function NavigationLinks({
  navVisible,
  setNavVisible,
}: NavLinksProps) {
  const pathname = usePathname();
  const { theme, setTheme } = useThemeContext();

  function curPage(link: string) {
    return pathname === link;
  }

  const [anim, startAnim] = useState(false);

  useEffect(() => {
    const navbacking = document.querySelector("#navlinks-backing");
    const navlinks = document.querySelector("#navlinks");

    if (navVisible === true) {
      navbacking?.classList.add("nav-backing-fade-out");
      navlinks?.classList.add("nav-fade-out");
      setTimeout(() => {
        navlinks?.classList.remove("nav-fade-out");
        navbacking?.classList.remove("nav-backing-fade-out");
        setNavVisible();
        startAnim(false);
      }, 600);
    }
  }, [anim]);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark")
      toast(
        <div className="flex flex-col gap-2">
          <h1 className="text-sm">Looking for a better experience?</h1>
          <p className="text-xs">Go back to dark mode!</p>
        </div>
      );
  };

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <nav
      id="navlinks-backing"
      className={`max-[800px]:w-full max-[800px]:min-h-screen max-[800px]:bg-gray-800 max-[800px]:bg-opacity-70 max-[800px]:backdrop-blur-sm max-[800px]:grid max-[800px]:place-items-center max-[800px]:absolute max-[800px]:top-0 max-[800px]:left-0 ${
        navVisible ? "max-[800px]:grid nav-fade-in" : "max-[800px]:hidden"
      }`}
    >
      <ul
        id="navlinks"
        className={`max-[800px]:flex-col max-[800px]:justify-center max-[800px]:w-60 max-[800px]:py-10 max-[800px]:rounded-lg max-[800px]:shadow-lg max-[800px]:bg-gradient-to-br relative ${
          navVisible ? "nav-fade-in-top" : ""
        } ${
          LightCheck()
            ? "max-[800px]:from-custom-white max-[800px]:to-border"
            : "max-[800px]:from-custom-black max-[800px]:to-custom-black"
        } flex justify-between gap-10 items-center`}
      >
        <div
          className="absolute top-5 right-5 max-[800px]:block hidden"
          onClick={() => startAnim(true)}
        >
          <CrossIcon
            width={20}
            color={LightCheck() ? "var(--custom-black)" : "var(--custom-white)"}
          />
        </div>

        {NAVIGATION_LINKS.map((item, index) => (
          <Link
            onClick={() => startAnim(true)}
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
          className={LightCheck() ? "text-custom-white" : "text-custom-black"}
          onClick={handleThemeChange}
        >
          {LightCheck() ? (
            <SunIcon className="fill-custom-white" />
          ) : (
            <MoonIcon className="fill-custom-white" />
          )}
        </button>
      </ul>
    </nav>
  );
}
