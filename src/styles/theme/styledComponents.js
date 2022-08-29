import { styled } from "@mui/material/styles";
import { Box, Button, Select, TextField } from "@mui/material";

export const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "inherit",
  background: theme.palette.primary.main,
  fontSize: "25px",
  borderRadius: "20px",
  boxShadow: "0px 4px 0px #BE9500",
  display: "flex",
  gap: "40px",
  color: "inherit",
  justifyContent: "flex-start",
  padding: "6px 30px",
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  outline: "none",
  border: "none",
  borderRadius: "10px",
  background: "#fff",
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

export const CustomSelect = styled(Select)(({ theme }) => ({
  outline: "none",
  border: "none",
  borderRadius: "10px",
  background: theme.palette.primary.main,
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
  "& svg": {
    position: "absolute",
    right: "15px",
    pointerEvents: "none",
  },
}));
