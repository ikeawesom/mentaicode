"use client";
import Link from "next/link";
import React, { useState } from "react";
import { DivFadeUp } from "../../animations";
import { useLottie } from "lottie-react";
import ArrowRightPrimary from "@/public/assets/images/lottie/arrow-right-primary.json";

type NextButtonProps = {
  text?: string;
  delay?: number;
  link: string;
};
export default function NextButton({ text, delay, link }: NextButtonProps) {
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
        className="text-primary font-semibold hover:brightness-110 duration-200 ease-in-out"
        onMouseOver={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <span className="flex gap-2 items-center justify-center">
          {text} <span>{arrow}</span>
        </span>
      </Link>
    </DivFadeUp>
  );
}
