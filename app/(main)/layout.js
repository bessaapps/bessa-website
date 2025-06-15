import Footer from "@/components/navigation/Footer";
import "../global.css";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { Text } from "@chakra-ui/react";

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
            Join your Tribe <Text as={"i"}>and</Text> your Vibe now for FREE!
          </Footer>
        </nav>
      </footer>
    </>
  );
}
