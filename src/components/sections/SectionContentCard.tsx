import React from "react";

type SectionContentProps = {
  children?: React.ReactNode;
  className?: string;
};
export default function SectionContentCard({
  children,
  className,
}: SectionContentProps) {
  return (
    <div className={`flex flex-col gap-8 max-w-6xl ${className}`}>
      {children}
    </div>
  );
}
