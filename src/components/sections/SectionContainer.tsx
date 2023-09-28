import React from "react";

type ContainerProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function SectionContainer({
  className,
  children,
}: ContainerProps) {
  return (
    <div className={"w-full grid place-items-center py-36 " + className}>
      {children}
    </div>
  );
}
