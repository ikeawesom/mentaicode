"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Splashscreen from "./Splashscreen";

type WrapperType = {
  children?: React.ReactNode;
  className?: string;
};

export default function AnimationWrapper({ children, className }: WrapperType) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className={className}>
      <Splashscreen />
      {children}
    </div>
  );
}
