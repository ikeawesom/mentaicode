import "./globals.css";
import type { Metadata } from "next";
import Developing from "@/components/Developing";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";

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
            {children}
          </body>
        )}
      </ThemeContextProvider>
    </html>
  );
}
