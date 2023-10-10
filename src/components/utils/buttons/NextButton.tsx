"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DivFadeUp } from "../../animations";
import { useLottie } from "lottie-react";
import ArrowRightPrimary from "@/public/assets/images/lottie/arrow-right-primary.json";
import { twMerge } from "tailwind-merge";

type NextButtonProps = {
  text?: string;
  delay?: number;
  link: string;
  textStyle?: string;
};
export default function NextButton({
  text,
  delay,
  link,
  textStyle,
}: NextButtonProps) {
  const [hoverState, setHoverState] = useState(false);

  const options = {
    animationData: ArrowRightPrimary,
    loop: hoverState,
    style: { width: 30, height: 30 },
  };

  const arrow = useLottie(options).View;

  return (
    <DivFadeUp delay={delay ? delay : 6}>
      <Link
        href={link}
        className="text-primary font-semibold hover:brightness-110 brightness-90 duration-200 ease-in-out"
        onMouseOver={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <span
          className={twMerge(
            "flex gap-2 items-center justify-center",
            textStyle
          )}
        >
          {text} <span>{arrow}</span>
        </span>
      </Link>
    </DivFadeUp>
  );
}
