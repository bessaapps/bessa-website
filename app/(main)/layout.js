import Footer from "@/components/navigation/Footer";
import "../global.css";
import { SiAppstore, SiGoogleplay } from "react-icons/si";

export default function RootLayout({ children }) {
  return (
    <>
      <main style={{ overflowX: "hidden" }}>{children}</main>
      <footer>
        <nav>
          <Footer
            buttons={[
              {
                anchor: "iOS",
                href: "https://apps.apple.com/us/app/bessa/id6471383138?platform=iphone",
                icon: <SiAppstore />
              },
              {
                anchor: "Android",
                href: "https://play.google.com/store/apps/details?id=com.bessa.bessa",
                icon: <SiGoogleplay />
              }
            ]}
          >
            Find your people. Share your story. Be part of something real.
          </Footer>
        </nav>
      </footer>
    </>
  );
}
