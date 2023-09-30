"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Splashscreen from "./Splashscreen";

type WrapperType = {
  children?: React.ReactNode;
};

export default function AnimationWrapper({ children }: WrapperType) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <Splashscreen />
      {children}
    </>
  );
}
