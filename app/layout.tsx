import "./globals.css";
import type { Metadata } from "next";
import Developing from "@/src/screens/Developing";
import { ThemeContextProvider } from "@/src/contexts/ThemeContext";
import Navbar from "@/src/components/Navbar";
import PageWrapper from "@/src/components/PageWrapper";

export const metadata: Metadata = {
  title: "Mentaicode | Ike Lim",
  description: "Sharing my skills and knowledge with others.",
};

const developing = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        {developing ? (
          <Developing />
        ) : (
          <body>
            <Navbar />
            <PageWrapper>{children}</PageWrapper>
          </body>
        )}
      </ThemeContextProvider>
    </html>
  );
}
