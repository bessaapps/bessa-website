import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

// https://tintsshades.netlify.app (Weight 10)

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "900"]
});

const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  colors: {
    black: "#000000",
    gray: {
      50: "#fcfcfc",
      100: "#f8f8f9",
      200: "#f1f1f3",
      300: "#eaeaec",
      400: "#e3e3e6",
      500: "#dcdce0",
      600: "#b0b0b3",
      700: "#848486",
      800: "#58585a",
      900: "#2c2c2d"
    },
    primary: {
      50: "#b0b0b3",
      100: "#b0b0b3",
      200: "#b0b0b3",
      300: "#848486",
      400: "#58585a",
      500: "#2c2c2d",
      600: "#2c2c2d",
      700: "#2c2c2d",
      800: "#2c2c2d",
      900: "#2c2c2d"
    },
    secondary: {
      50: "#f7ecfc",
      100: "#eed9f9",
      200: "#ddb2f2",
      300: "#cd8cec",
      400: "#bc65e5",
      500: "#ab3fdf",
      600: "#8932b2",
      700: "#672686",
      800: "#441959",
      900: "#220d2d"
    }
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.100",
        color: "gray.900",
        lineHeight: 2
      },
      // Minor Third
      // https://typescale.com
      h1: { fontSize: "2.986rem !important" },
      h2: { fontSize: "2.488rem !important" },
      h3: { fontSize: "2.074rem !important" }
    })
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily
  },
  container: {
    sm: "620px"
  },
  radii: {
    sm: "4px",
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
          borderRadius: 16
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
