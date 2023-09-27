"use client";
import React from "react";
import useThemeContext from "@/contexts/ThemeContext";
import Link from "next/link";

type SecondaryButtonProps = {
  children?: React.ReactNode;
  text?: string;
  link: string;
  target?: "_blank" | "_self";
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
  style?: string;
};
export default function SecondaryButton({
  children,
  text,
  target,
  link,
  onClick,
  onMouseOver,
  onMouseLeave,
  style,
}: SecondaryButtonProps) {
  const { theme } = useThemeContext();

  return (
    <div className="rounded-md bg-transparent px-8 py-2">
      <Link
        href={link ? link : ""}
        target={target ? target : "_self"}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        className={
          style +
          " font-bold " +
          (theme === "dark" ? "text-custom-white" : "text-custom-black")
        }
      >
        {text || text === "" ? text : "Secondary Button"}
      </Link>
      {children && children}
    </div>
  );
}
