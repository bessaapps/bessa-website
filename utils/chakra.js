import { extendTheme } from "@chakra-ui/react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

const theme = extendTheme({
  colors: {
    black: "#000000",
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
    red: {
      100: "#FDEAE0",
      200: "#FCD1C2",
      300: "#F6B1A2",
      400: "#EE9188",
      500: "#e36262",
      600: "#C34752",
      700: "#A33145",
      800: "#831F39",
      900: "#6C1232"
    },
    orange: {
      100: "#FDF9E0",
      200: "#FCF1C2",
      300: "#F6E4A2",
      400: "#EED588",
      500: "#e3c062",
      600: "#C39E47",
      700: "#A37E31",
      800: "#835F1F",
      900: "#6C4A12"
    },
    green: {
      100: "#EAFDE0",
      200: "#D1FCC2",
      300: "#B1F6A2",
      400: "#91EE88",
      500: "#62e362",
      600: "#47C352",
      700: "#31A345",
      800: "#1F8339",
      900: "#126C32"
    }
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        fontSize: 16,
        overflowX: "hidden",
        lineHeight: 2
      },
      h1: { fontSize: "2rem !important" },
      h2: { fontSize: "1.5rem !important" }
    }
  },
  fonts: {
    heading: roboto.style.fontFamily,
    body: roboto.style.fontFamily
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
          borderColor: "gray.100"
        }
      }
    }
  }
});

export default theme;
