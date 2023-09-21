"use client";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { useLottie } from "lottie-react";
import ArrowRight from "@/public/assets/images/lottie/arrow-right.json";

export default function GetStartedButton() {
  const [hoverState, setHoverState] = useState(false);

  const options = {
    animationData: ArrowRight,
    loop: hoverState,
    style: { width: 20, aspectRatio: 1 },
  };

  const arrow = useLottie(options).View;

  return (
    <PrimaryButton
      link="/products"
      text=""
      onMouseOver={() => setHoverState(true)}
      onMouseLeave={() => setHoverState(false)}
    >
      <span className="font-bold text-custom-black flex gap-2 items-center justify-center">
        Get started <span>{arrow}</span>
      </span>
    </PrimaryButton>
  );
}
