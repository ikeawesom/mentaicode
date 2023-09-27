import { LightCheck } from "@/src/contexts/ThemeContext";
import React from "react";

type HeaderType = {
  className?: string;
  children?: React.ReactNode;
  headerLight:
    | "header-light"
    | "header-light-1"
    | "header-light-2"
    | "header-light-3";

  headerDark:
    | "header-dark"
    | "header-dark-1"
    | "header-dark-2"
    | "header-dark-3";
};

export default function MainHeader({
  className,
  children,
  headerLight,
  headerDark,
}: HeaderType) {
  return (
    <h1
      className={`${
        LightCheck() ? `${headerLight} drop-shadow-md` : headerDark
      } lg:w-[1000px] md:w-[620px] sm:w-[500px] max-[639px]:text-5xl max-[320px]:text-4xl ${className} text-center`}
    >
      {children}
    </h1>
  );
}
