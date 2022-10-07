import {createTheme} from "@mui/material/styles";

const breakpoints = {
  values: {
    xs: 0,
    sm: 380,
    md: 426,
    lg: 575,
    xl: 767,
    "2xl": 991,
    "3xl": 1199,
    "4xl": 1439
  },
};

export const theme = createTheme({
    breakpoints: breakpoints,
    palette: {
      background: {
        paper: "#F3F1F4",
        default: "#FFF"
      },
      primary: {
        light: "#FFCC1259",
        main: "#FFCB12",
        dark: "#FFC263",
      },
      secondary: {
        light: "#F5D0C5",
        main: "#F05656",
        dark: "#FC5454",
      },
      lightColor: {
        light: "#fff",
        main: "#F3F1F4",
        dark: "#EAEAEA",
      },
      fontColor: {
        light:"#adb5bd",
        main: "#31476E",
        dark: "#000",
      },
    },
    typography: {
      fontFamily: ["Scheme", "-apple-system", "Roboto", "sans-serif"].join(","),
      color: "inherit"
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: "0",
            minHeight: "100vh",
            minWidth: "100vw",
            color: "#31476E",
            fontSize: "20px",
            fontFamily: "Scheme",
          },
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
      MuiInputBase: {
        "&::placeholder": {
          color: "red"
        },
        styleOverrides: {
          root: {
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            color: "rgba(0, 0, 0, 0.5)",
            padding: "18px 20px",
            fontSize: "18px",
            background: "white",
            width: "100%",
            input: {
              "::placeholder": {
                color: "black",
              },
            }
          }
        }
      },
      MuiInputLabel: {
        variants: [
          {
            props: {variant: "outlined"},
            style: {
              marginTop: "-5px",
              fontSize: "17px",
            },
          },
        ],
      },
    },
  })
;

theme.typography.body1 = {
  fontFamily: "SchemeRg-Regular",
  fontSize: "inherit",
  color: theme.palette.fontColor.main,
  [theme.breakpoints.down("3xl")]: {
    fontSize: "17px",
  },
};

theme.typography.h1 = {
  fontSize: "50px",
  fontFamily: "SchemeLt-Regular",
};

theme.typography.h2 = {
  fontSize: "20px",
  fontFamily: "SchemeRg-Regular",
  [theme.breakpoints.up("3xl")]: {
    fontSize: "20px",
  },
};

theme.typography.h3 = {
  fontFamily: "SchemeBk-Regular",
  color: theme.palette.fontColor.main,
  fontSize: "18px",
  fontWeight: 400,
  [theme.breakpoints.down("3xl")]: {
    fontSize: "16px",
  },
};

theme.typography.h4 = {
  fontFamily: "SchemeBk-Regular",
  fontSize: "18px",
};

theme.typography.h5 = {
  fontFamily: "SchemeBk-Regular",
  fontSize: "24px",
};

theme.typography.h6 = {
  fontFamily: "SchemeBk-Regular",
  fontSize: "22px",
};

theme.typography.bold = {
  fontFamily: "SchemeRg-Bold",
  fontSize: "17px",
};


theme.typography.caption = {
  color: theme.palette.fontColor.main,
  fontSize: "17px",
  fontFamily: "SchemeLt-Regular",
  [theme.breakpoints.down("2xl")]: {
    fontSize: "15px",
  },
};

theme.typography.subtitle1 = {
  fontSize: "17px",
  fontFamily: "Roboto",
  fontWeight: 700,
};

theme.typography.subtitle2 = {
  fontSize: "17px",
  fontFamily: "Roboto",
  fontWeight: 400,
  [theme.breakpoints.down("lg")]: {
    fontSize: "15px",
  },
};

theme.shadows[1] = "0px 4px 4px rgba(0, 0, 0, 0.25)";
theme.shadows[2] = "0px 12px 20px rgba(0, 0, 0, 0.25)";
theme.shadows[3] = "0px 30px 20px rgba(0, 0, 0, 0.25)";
theme.shadows[4] = "0px 0px 6px rgba(0, 0, 0, 0.16)";
