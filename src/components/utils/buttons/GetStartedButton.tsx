"use client";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { useLottie } from "lottie-react";
import ArrowRight from "@/public/assets/images/lottie/arrow-right.json";

type GetStartedProps = {
  text?: string;
};

export default function GetStartedButton({ text }: GetStartedProps) {
  const [hoverState, setHoverState] = useState(false);

  const options = {
    animationData: ArrowRight,
    loop: hoverState,
    style: { width: 20, aspectRatio: 1 },
  };

  const arrow = useLottie(options).View;

  return (
    <PrimaryButton
      link="/shop"
      text=""
      onMouseOver={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <span className="font-bold text-custom-black flex gap-2 items-center justify-center">
        {text ? text : "Get started"} <span>{arrow}</span>
      </span>
    </PrimaryButton>
  );
}
