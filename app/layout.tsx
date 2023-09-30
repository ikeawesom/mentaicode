import "./globals.css";
import type { Metadata } from "next";
import Developing from "@/src/screens/Developing";
import { ThemeContextProvider } from "@/src/contexts/ThemeContext";
import Navbar from "@/src/components/navigation/Navbar";
import PageWrapper from "@/src/components/PageWrapper";
import Footer from "@/src/components/navigation/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Mentaicode | Ike Lim",
    default: "Mentaicode | Ike Lim", // a default is required when creating a template
  },

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
            <Footer />
          </body>
        )}
      </ThemeContextProvider>
    </html>
  );
}
