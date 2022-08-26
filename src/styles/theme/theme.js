import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFCB12",
    },
    secondary: {
      main: "#F05656",
    },
  },
  typography: {
    body1: {
      fontFamily: "SchemeRg-Regular",
    },
    fontFamily:
      "SchemeRg-Bold, SchemeRg-Regular, SchemeLt-Regular, SchemeBk-Regular, 'Roboto', sans-serif",
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
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "custom" },
          style: {
            textTransform: "none",
            background: "#FFCB12",
            fontSize: "25px",
            borderRadius: "20px",
            boxShadow: "0px 4px 0px #BE9500",
            display: "flex",
            gap: "40px",
            justifyContent: "flex-start",
            padding: "6px 30px",
          },
        },
      ],
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: "#31476E",
        },
      },
    },
  },
});
