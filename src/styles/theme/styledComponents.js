import {styled} from "@mui/material/styles";
import {Box, Button, Select, TextField} from "@mui/material";
import {theme} from "./theme";

export const CardBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  position: "relative",
  margin: "0px",
}));

export const SignUpBox = styled(Box)(({theme}) => ({
  backgroundColor: "#F6FBF9",
  borderRadius: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "900px",
  width: "100%",
  minHeight: "600px",
  height: "100%",
  padding: "40px",
  color: "rgba(19, 48, 96, 0.72)",
}));

export const CustomButton = styled(Button)(({theme}) => ({
  textTransform: "none",
  fontFamily: "SchemeRg-Regular",
  borderWidth: '3px',
  fontSize: "24px",
  borderRadius: "50px",
  display: "flex",
  gap: "35px",
  color: "inherit",
  justifyContent: "flex-start",
  padding: "0 20px 0 0",
  "&:hover, &:active": {
    opacity: 0.8,
    borderWidth: "3px",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("3xl")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("xl")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    gap: "20px",
    width: "100%"
  },
}));
export const YellowButton = styled(Button)(({theme}) => ({
  textTransform: "none",
  fontFamily: "SchemeRg-Regular",
  background: theme.palette.primary.main,
  fontSize: "22px",
  borderRadius: "20px",
  boxShadow: "0px 4px 0px #BE9500",
  display: "flex",
  gap: "10px",
  color: "inherit",
  justifyContent: "flex-start",
  padding: "6px 25px",
  [theme.breakpoints.down("3xl")]: {
    fontSize: "18px",
  },
  [theme.breakpoints.down("xl")]: {
    justifyContent: "center",
  },
}));

export const LandingButton = styled(Button)(({theme}) => ({
  textTransform: "uppercase",
  fontFamily: "Roboto",
  fontWeight: "700",
  borderWidth: '3px',
  fontSize: "18px",
  borderRadius: "12px",
  display: "flex",
  minWidth: "190px",
  textAlign: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[4],
  color: theme.palette.fontColor.main,
  padding: "3px",
  "&:hover, &:active": {
    opacity: 0.8,
  },
  [theme.breakpoints.down("3xl")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("xl")]: {
    textAlign: "center",
  },
  [theme.breakpoints.down("md")]: {
    gap: "20px",
    width: "100%"
  },
}));

export const UnStyledButton = styled(Button)(({theme}) => ({
  color: "transparent",
  backgroundColor: "transparent",
  alignSelf: "flex-end",
  "&:hover, &:active": {
    opacity: 0.8,
    outline: "none",
    backgroundColor: "transparent",
  },
}));

export const FormButton = styled(Button)(({theme}) => ({
  textTransform: "unset",
  fontFamily: "Karla, sans-serif",
  fontSize: "22px",
  fontWeight: 700,
  borderRadius: "15px",
  padding: "15px",
  minWidth: "260px",
  "&:hover": {
    boxShadow: theme.shadows[4],
    color: "inherit"
  },
}));

export const SearchInput = styled(TextField)(({theme}) => ({
  outline: "none",
  border: "none",
  borderRadius: "10px",
  background: theme.palette.lightColor.light,
  boxShadow: theme.shadows[1],
  maxWidth: "520px",
  width: "100%",
  "& input": {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#31476E",
      opacity: 1,
      fontSize: "17px",
    },
  },
  "& fieldset": {
    border: "none",
  },
}));

export const CustomSelect = styled(Select)(({theme}) => ({
  outline: "none",
  border: "none",
  fontSize: "18px",
  borderRadius: "10px",
  color: "inherit",
  maxHeight: "45px",
  background: theme.palette.primary.main,
  boxShadow: theme.shadows[1],
  maxWidth: "520px",
  verticalAlign: "center",
  width: "100%",
  "& fieldset": {
    border: "none",
  },
  "& svg": {
    position: "absolute",
    right: "15px",
    pointerEvents: "none",
  },
}));

export const ListItem = styled(Box)(({theme}) => ({
  background: theme.palette.lightColor.light,
  height: "40px",
  marginRight: '25px',
  borderRadius: "30px 30px 30px 30px",
  padding: "15px 25px",
  color: theme.palette.fontColor.dark,
  display: "flex",
  gap: "35px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    gap: "10px",
    fontSize: "18px",
  },
}));

export const VariantItem = styled(Box)(({theme}) => ({
  border: "1px solid rgba(0, 0, 0, 0.1)",
  display: "flex",
  fontFamily: "SchemeRg-Regular",
  justifyContent: "center",
  alignItems: "center",
  lineHeight: "1.3",
  fontWeight: "500",
  borderRadius: "10px",
  color: "rgba(0, 0, 0, 0.5)",
  padding: "20px",
  fontSize: "18px",
  background: "white",
  width: "100%",
  cursor: "pointer"
}));
