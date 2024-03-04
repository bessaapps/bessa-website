import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      900: "#191919",
    },
    primary: {
      50: "#f9f6ff",
      100: "#e8daff",
      200: "#d4baff",
      300: "#bb91ff",
      400: "#ac79ff",
      500: "#9362e3",
      600: "#7c53c0",
      700: "#64429a",
      800: "#543882",
      900: "#3d295e",
    },
    red: {
      50: "#fff5f5",
      100: "#ffd7d5",
      200: "#ffb2af",
      300: "#ff7f7b",
      400: "#ee6b67",
      500: "#c95b57",
      600: "#a94c49",
      700: "#883d3b",
      800: "#733432",
      900: "#532624",
    },
    orange: {
      50: "#fffaf4",
      100: "#ffead2",
      200: "#ffd19c",
      300: "#efaf67",
      400: "#ce9759",
      500: "#b2824d",
      600: "#966e41",
      700: "#775733",
      800: "#5e4528",
      900: "#4d3821",
    },
    green: {
      50: "#effff7",
      100: "#98ffcf",
      200: "#66edae",
      300: "#5bd49b",
      400: "#50b988",
      500: "#459f75",
      600: "#398461",
      700: "#2c664b",
      800: "#24543d",
      900: "#1e4532",
    },
  },
  styles: {
    global: {
      "html, body": {
        color: "gray.900",
        fontSize: 16,
        overflowX: "hidden",
        lineHeight: 2,
      },
      h1: { fontSize: "2rem !important" },
      h2: { fontSize: "1.5rem !important" },
    },
  },
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
  },
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: "none",
          borderWidth: 1,
          borderColor: "gray.100",
        },
      },
    },
  },
});

export default theme;
