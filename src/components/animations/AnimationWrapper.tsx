import React from "react";
import Splashscreen from "./Splashscreen";

type WrapperType = {
  children?: React.ReactNode;
  className?: string;
};

export default function AnimationWrapper({ children, className }: WrapperType) {
  return (
    <div className={className}>
      <Splashscreen />
      {children}
    </div>
  );
}
