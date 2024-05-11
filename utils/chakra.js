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
    red: {
      50: "#fdf5f5",
      100: "#f9d9d9",
      200: "#f3b7b7",
      300: "#ec8b8b",
      400: "#e77070",
      500: "#e04444",
      600: "#c03636",
      700: "#9b2c2c",
      800: "#842525",
      900: "#601b1b"
    },
    orange: {
      50: "#fefaf6",
      100: "#f9ebdc",
      200: "#f3d3b4",
      300: "#e9b179",
      400: "#df9041",
      500: "#c17c37",
      600: "#a3682e",
      700: "#825325",
      800: "#66421d",
      900: "#543618"
    },
    green: {
      50: "#f5fdf9",
      100: "#c5f5dd",
      200: "#80eab5",
      300: "#3dd78a",
      400: "#35bc79",
      500: "#2ea268",
      600: "#268656",
      700: "#1d6843",
      800: "#185537",
      900: "#14462d"
    }
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
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
