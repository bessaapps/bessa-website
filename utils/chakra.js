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
      50: "#f3f3f3",
      100: "#e7e7e7",
      200: "#cfcfcf",
      300: "#b8b8b8",
      400: "#a0a0a0",
      500: "#888888",
      600: "#6d6d6d",
      700: "#525252",
      800: "#363636",
      900: "#1b1b1b",
      950: "#0e0e0e"
    },
    primary: {
      50: "#f3f3f3",
      100: "#e7e7e7",
      200: "#cfcfcf",
      300: "#b8b8b8",
      400: "#a0a0a0",
      500: "#1b1b1b",
      600: "#1b1b1b",
      700: "#1b1b1b",
      800: "#1b1b1b",
      900: "#1b1b1b",
      950: "#0e0e0e"
    },
    secondary: {
      50: "#f1e6f3",
      100: "#e4cce7",
      200: "#c999cf",
      300: "#ad66b8",
      400: "#9233a0",
      500: "#770088",
      600: "#5f006d",
      700: "#470052",
      800: "#300036",
      900: "#18001b",
      950: "#0c000e"
    },
    danger: {
      50: "#f3e6e6",
      100: "#e7cccc",
      200: "#cf9999",
      300: "#b86666",
      400: "#a03333",
      500: "#880000",
      600: "#6d0000",
      700: "#520000",
      800: "#360000",
      900: "#1b0000",
      950: "#0e0000"
    },
    warning: {
      50: "#f3f3e6",
      100: "#e7e7cc",
      200: "#cfcf99",
      300: "#b7b766",
      400: "#9f9f33",
      500: "#878700",
      600: "#6c6c00",
      700: "#515100",
      800: "#363600",
      900: "#1b1b00",
      950: "#0d0d00"
    },
    success: {
      50: "#e6f3e6",
      100: "#cce7cc",
      200: "#99cf99",
      300: "#66b766",
      400: "#339f33",
      500: "#008700",
      600: "#006c00",
      700: "#005100",
      800: "#003600",
      900: "#001b00",
      950: "#000d00"
    },
    info: {
      50: "#e6e6f3",
      100: "#cccce7",
      200: "#9999cf",
      300: "#6666b7",
      400: "#33339f",
      500: "#000087",
      600: "#00006c",
      700: "#000051",
      800: "#000036",
      900: "#00001b",
      950: "#00000d"
    }
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.50",
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
