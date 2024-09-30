import React from "react";
import { ProjectCard } from "../home/Projects";

export default function FeaturedSection() {
  return (
    <div className="flex-col flex min-[440px]:gap-52 gap-20 justify-center items-center">
      <ProjectCard name="Social40" />
      <ProjectCard name="Mademoiselle Angel" />
      <ProjectCard name="PassSafe" />
      <ProjectCard name="Project Econs" />
    </div>
  );
}
