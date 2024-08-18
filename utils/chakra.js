import { extendTheme } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const theme = extendTheme({
  colors: {
    black: "#101010",
    gray: {
      50: "#fafafa",
      100: "#f1f1f1",
      200: "#e7e7e7",
      300: "#d4d4d4",
      400: "#adadad",
      500: "#7f7f7f",
      600: "#545454",
      700: "#373737",
      800: "#202020",
      900: "#191919"
    },
    primary: {
      50: "#fbf5fd",
      100: "#eed9f9",
      200: "#e0b7f3",
      300: "#cd8dec",
      400: "#c274e8",
      500: "#b24fe2",
      600: "#9b39ca",
      700: "#7d2ea3",
      800: "#6a278a",
      900: "#4d1c64"
    },
    secondary: {
      50: "#f0f9fe",
      100: "#c1e5fc",
      200: "#87cefa",
      300: "#3baef7",
      400: "#099af4",
      500: "#0081d2",
      600: "#006db2",
      700: "#00588f",
      800: "#004a79",
      900: "#003658"
    }
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        overflowX: "hidden",
        lineHeight: 2
      },
      // Minor Second
      // https://typescale.com
      h1: { fontSize: "1.476rem !important" },
      h2: { fontSize: "1.383rem !important" },
      h3: { fontSize: "1.296rem !important" }
    }
  },
  fonts: {
    heading: roboto.style.fontFamily,
    body: roboto.style.fontFamily
  },
  radii: {
    md: "8px"
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none"
        }
      }
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: "none",
          borderWidth: 1,
          borderColor: "gray.100",
          overflow: "hidden"
        }
      }
    },
    Alert: {
      baseStyle: {
        container: {
          borderRadius: 8
        }
      }
    }
  }
});

export default theme;
