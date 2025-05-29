import Footer from "@/components/navigation/Footer";
import "../global.css";

export default function RootLayout({ children }) {
  return (
    <>
      <main style={{ overflowX: "hidden" }}>{children}</main>
      <footer>
        <nav>
          <Footer />
        </nav>
      </footer>
    </>
  );
}
