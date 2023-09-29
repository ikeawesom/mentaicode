"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type PrimaryButtonProps = {
  children?: React.ReactNode;
  text?: string;
  link: string;
  target?: "_blank" | "_self";
  light?: boolean;
  className?: string;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
};
export default function PrimaryButton({
  children,
  text,
  onClick,
  target,
  link,
  onMouseOver,
  onMouseLeave,
  className,
}: PrimaryButtonProps) {
  return (
    <a
      href={link ? link : ""}
      target={target ? target : "_self"}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={twMerge(
        `rounded-md bg-primary px-8 py-2 hover:brightness-110 duration-500 transition-[filter]`,
        className
      )}
    >
      <span className="font-bold text-custom-black">
        {text || text === "" ? text : "Primary Button"}
      </span>
      {children && children}
    </a>
  );
}
