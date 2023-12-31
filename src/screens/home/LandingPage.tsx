import React from "react";

type LandingPageProps = {
  children: React.ReactNode;
};

export default function LandingPage({ children }: LandingPageProps) {
  return (
    <div className={`grid place-items-center min-h-[100vh]`}>{children}</div>
  );
}
