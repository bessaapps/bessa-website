import type { Metadata } from "next";
import "./globals.css";
import TopNavigation from "@/components/navigation/TopNavigation";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import Script from "next/script";
import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "./fonts/queering-bold-expanded.woff2",
      weight: "800",
      style: "normal"
    },
    {
      path: "./fonts/queering-semibold-expanded.woff2",
      weight: "700",
      style: "normal"
    },
    {
      path: "./fonts/public-sans.ttf",
      style: "normal"
    }
  ]
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
    <html lang={"en"} className={`${fonts.className} h-full antialiased`}>
      <body>
        <TopNavigation />
        {children}
        <BottomNavigation />
      </body>
      {process.env.NODE_ENV !== "development" && (
        <>
          <Script
            src={"https://plausible.io/js/pa-jx0cEX4XPPCKsuWlj56BJ.js"}
            strategy={"beforeInteractive"}
          />
          <Script id={"plausible"} strategy={"beforeInteractive"}>
            {`
              window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
              plausible.init()
            `}
          </Script>
        </>
      )}
    </html>
  );
}
