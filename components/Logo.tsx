import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"} className="flex gap-3 items-center justify-start">
      <Image
        src={"/assets/icons/SVG/icon-large-1.svg"}
        alt="Mentaicode"
        width={60}
        height={60}
      />
      <Image
        src={"/assets/images/header-dark.svg"}
        alt="Mentaicode"
        width={200}
        height={10}
      />
    </Link>
  );
}
