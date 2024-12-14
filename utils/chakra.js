import { extendTheme } from "@chakra-ui/react";
import { Roboto } from "next/font/google";
import { mode } from "@chakra-ui/theme-tools";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
});

export const light = {
  // BRAND AND FUNCTIONAL COLORS
  // https://tintsshades.netlify.app
  // Base: S: 72 B: 87
  "color-primary-100": "#fcf7fe",
  "color-primary-200": "#e7c9f6",
  "color-primary-300": "#d39bee",
  "color-primary-400": "#bf6de7",
  "color-primary-500": "#ab3fdf",
  "color-primary-600": "#8230a9",
  "color-primary-700": "#592174",
  "color-primary-800": "#30123e",
  "color-primary-900": "#070309",
  "color-success-100": "#f7fef7",
  "color-success-200": "#c9f6c9",
  "color-success-300": "#9bee9b",
  "color-success-400": "#6ce66c",
  "color-success-500": "#3ede3e",
  "color-success-600": "#2fa92f",
  "color-success-700": "#207320",
  "color-success-800": "#113e11",
  "color-success-900": "#020902",
  "color-info-100": "#f7fefe",
  "color-info-200": "#c9f6f6",
  "color-info-300": "#9beeee",
  "color-info-400": "#6ce6e6",
  "color-info-500": "#3edede",
  "color-info-600": "#2fa9a9",
  "color-info-700": "#207373",
  "color-info-800": "#113e3e",
  "color-info-900": "#020909",
  "color-warning-100": "#fefbf7",
  "color-warning-200": "#f6e6c9",
  "color-warning-300": "#eed19b",
  "color-warning-400": "#e6bb6c",
  "color-warning-500": "#dea63e",
  "color-warning-600": "#a97e2f",
  "color-warning-700": "#735620",
  "color-warning-800": "#3e2e11",
  "color-warning-900": "#090702",
  "color-danger-100": "#fef7f7",
  "color-danger-200": "#f6c9c9",
  "color-danger-300": "#ee9b9b",
  "color-danger-400": "#e66c6c",
  "color-danger-500": "#de3e3e",
  "color-danger-600": "#a92f2f",
  "color-danger-700": "#732020",
  "color-danger-800": "#3e1111",
  "color-danger-900": "#090202",
  // BASIC
  // Base: H: 240 S: 2
  "color-basic-100": "#ffffff",
  "color-basic-200": "#f7f7fc",
  "color-basic-300": "#f2f2f7",
  "color-basic-400": "#ededf2",
  "color-basic-500": "#dcdce0",
  "color-basic-600": "#afafb3",
  "color-basic-700": "#575759",
  "color-basic-800": "#434345",
  "color-basic-900": "#373738",
  "color-basic-1000": "#2f2f30",
  "color-basic-1100": "#252526"
};

const theme = extendTheme({
  config: { initialColorMode: "system", useSystemColorMode: true },
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
      500: "#3edede",
      600: "#006db2",
      700: "#00588f",
      800: "#004a79",
      900: "#003658"
    }
  },
  styles: {
    global: (props) => ({
      "html, body": {
        bg: mode("gray.50", "gray.800")(props),
        color: mode("gray.900", "gray.100")(props),
        overflowX: "hidden",
        lineHeight: 2
      },
      // Minor Second
      // https://typescale.com
      h1: { fontSize: "1.476rem !important" },
      h2: { fontSize: "1.383rem !important" },
      h3: { fontSize: "1.296rem !important" }
    })
  },
  fonts: {
    heading: roboto.style.fontFamily,
    body: roboto.style.fontFamily
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
