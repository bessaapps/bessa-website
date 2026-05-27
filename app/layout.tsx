import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { GoogleAnalytics } from "@next/third-parties/google";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Bessa LGBTQ+ Social Media App",
  description:
    "Queer content. Real connections. Join Bessa, an inclusive LGBTQ+ social media app and creative hub to share your story and find your family."
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
      {process.env.NODE_ENV !== "development" && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!} />
      )}
    </html>
  );
}
