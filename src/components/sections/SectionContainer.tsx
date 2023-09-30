import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SectionContainer({
  className,
  children,
}: ContainerProps) {
  return (
    <div className={twMerge("w-full grid place-items-center py-36", className)}>
      {children}
    </div>
  );
}
