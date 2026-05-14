import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import BottomNavigation from "@/components/navigation/BottomNavigation";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bessa - Gay Social Media Built for Real Queer Connections"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={"en"} className={`${interSans.variable} h-full antialiased`}>
      <body>
        <TopNavigation />
        {children}
        <BottomNavigation />
      </body>
    </html>
  );
}
