import "./globals.css";
import type { Metadata } from "next";
import Developing from "@/src/screens/Developing";
import { ThemeContextProvider } from "@/src/contexts/ThemeContext";
import Navbar from "@/src/components/navigation/Navbar";
import Footer from "@/src/components/navigation/Footer";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    template: "%s | Mentaicode",
    default: "Mentaicode | Ike Lim",
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
            <Toaster richColors position="top-center" />
            <Navbar />
            {children}
            <Footer />
          </body>
        )}
      </ThemeContextProvider>
    </html>
  );
}
