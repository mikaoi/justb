import {styled} from "@mui/material/styles";
import {Box, Button, Select, TextField} from "@mui/material";
import {theme} from "./theme";

export const CardBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
  position: "relative",
  margin: "0px",
}));

export const CustomButton = styled(Button)(({theme}) => ({
  textTransform: "none",
  fontFamily: "SchemeRg-Regular",
  borderWidth: '3px',
  fontSize: "30px",
  borderRadius: "50px",
  display: "flex",
  gap: "40px",
  color: "inherit",
  justifyContent: "flex-start",
  padding: 0,
  "&:hover, &:active": {
    opacity: 0.8,
    borderWidth: "3px",
    backgroundColor: "transparent",
  },
  [theme.breakpoints.down("3xl")]: {
    fontSize: "18px",
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
  height: "50px",
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
