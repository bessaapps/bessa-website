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
      50: "#f2f2f2",
      100: "#e6e6e6",
      200: "#cccccc",
      300: "#b3b3b3",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4d4d4d",
      800: "#333333",
      900: "#1a1a1a"
    },
    primary: {
      50: "#f2f2f2",
      100: "#e6e6e6",
      200: "#cccccc",
      300: "#b3b3b3",
      400: "#999999",
      500: "#1a1a1a",
      600: "#1a1a1a",
      700: "#1a1a1a",
      800: "#1a1a1a",
      900: "#1a1a1a"
    },
    secondary: {
      50: "#f1eaf3",
      100: "#e3d4e6",
      200: "#c7a9cd",
      300: "#ab7fb4",
      400: "#8f549b",
      500: "#732982",
      600: "#5c2168",
      700: "#45194e",
      800: "#2e1034",
      900: "#17081a"
    },
    danger: {
      50: "#f3eaea",
      100: "#e6d4d4",
      200: "#cda9a9",
      300: "#b47f7f",
      400: "#9b5454",
      500: "#822929",
      600: "#682121",
      700: "#4e1919",
      800: "#341010",
      900: "#1a0808"
    },
    warning: {
      50: "#f3efea",
      100: "#e6e0d4",
      200: "#cdc1aa",
      300: "#b4a17f",
      400: "#9b8255",
      500: "#82632a",
      600: "#684f22",
      700: "#4e3b19",
      800: "#342811",
      900: "#1a1408"
    },
    success: {
      50: "#eaf3eb",
      100: "#d4e6d7",
      200: "#aacdae",
      300: "#7fb486",
      400: "#559b5d",
      500: "#2a8235",
      600: "#22682a",
      700: "#194e20",
      800: "#113415",
      900: "#081a0b"
    },
    info: {
      50: "#eaf3f3",
      100: "#d4e6e6",
      200: "#aacdcd",
      300: "#7fb4b4",
      400: "#559b9b",
      500: "#2a8282",
      600: "#226868",
      700: "#194e4e",
      800: "#113434",
      900: "#081a1a"
    }
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.100",
        color: "gray.800",
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
