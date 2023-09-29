import "../../globals.css";
import type { Metadata } from "next";
import PageWrapper from "@/src/components/PageWrapper";

export const metadata: Metadata = {
  title: "Case Studies | Mentaicode",
  description: "Sharing my skills and knowledge with others.",
};

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageWrapper> {children} </PageWrapper>;
}
