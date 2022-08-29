import { createTheme } from "@mui/material/styles";
import SchemeRegular from "../fonts/SchemeRg-Regular.woff2";

const breakpoints = {
  values: {
    xs: 0,
    sm: 380,
    md: 426,
    lg: 575,
    xl: 767,
    "2xl": 991,
    "3xl": 1199,
  },
};

export const theme = createTheme({
  breakpoints: breakpoints,
  palette: {
    background: {
      paper: "#F3F1F4",
    },
    primary: {
      main: "#FFCB12",
    },
    secondary: {
      main: "#F05656",
    },
    greyColor: {
      main: "#F3F1F4",
    },
    fontColor: {
      main: "#31476E",
      dark: "#000",
    },
  },
  typography: {
    fontFamily: "Scheme",
    // "SchemeRg-Regular, SchemeRg-Bold, SchemeLt-Regular, SchemeBk-Regular, 'Roboto', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      // styleOverrides: {
      //   body: {
      //     margin: "0",
      //     minHeight: "100vh",
      //     minWidth: "100vw",
      //     color: "#31476E",
      //     fontSize: "20px",
      //     fontFamily: "Scheme",
      //   }
      // },
      styleOverrides: `
          @font-face {
          font-family: 'Scheme';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('SchemeRg'), local('SchemeRg-Regular'), url(${SchemeRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        color: "#31476E",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        marginLeft: "5px",
      },
    },
  },
});

theme.typography.body1 = {
  fontFamily: "SchemeRg-Regular",
  fontSize: "inherit",
  color: theme.palette.fontColor.main,
};

theme.typography.h1 = {
  fontSize: "50px",
  fontFamily: "SchemeLt-Regular",
};

theme.typography.h2 = {
  fontSize: "25px",
  fontFamily: "inherit",
};

theme.typography.h3 = {
  fontFamily: "SchemeBk-Regular",
  fontSize: "25px",
  fontWeight: 400,
};

theme.typography.h4 = {
  fontFamily: "SchemeBk-Regular",
  fontSize: "inherit",
};

theme.typography.bold = {
  fontFamily: "SchemeRg-Bold",
  fontSize: "17px",
};

theme.typography.caption = {
  color: theme.palette.fontColor.main,
  fontSize: "17px",
  fontFamily: "SchemeLt-Regular",
};

theme.typography.subtitle1 = {
  fontSize: "17px",
  fontFamily: "Roboto",
  fontWeight: 700,
};

theme.shadows[1] = "0px 4px 4px rgba(0, 0, 0, 0.25)";
theme.shadows[2] = "0px 12px 20px rgba(0, 0, 0, 0.25)";
theme.shadows[3] = "0px 30px 20px rgba(0, 0, 0, 0.25)";
