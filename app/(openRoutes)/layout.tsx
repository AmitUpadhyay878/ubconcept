import type React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter", 
});


export default function OpenRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="relative z-10 flex flex-col min-h-screen">
             <Navbar />
            <main className="flex-grow pt-16">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
  );
}
