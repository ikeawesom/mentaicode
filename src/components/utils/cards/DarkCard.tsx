import React from "react";

type CardTypes = {
  className?: string;
  children?: React.ReactNode;
};
export default function DarkCard({ className, children }: CardTypes) {
  return (
    <div
      className={`border-transparent border-2 min-[330px]:dark:border-slate-800 min-[330px]:dark:bg-gradient-to-br min-[330px]:dark:from-slate-800 min-[330px]:dark:to-custom-black rounded-md min-[330px]:p-5 ${className}`}
    >
      {children}
    </div>
  );
}
