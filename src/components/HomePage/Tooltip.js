import React from "react";
import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme/theme";
import {NavLink} from "react-router-dom";

const Tooltip = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function getOrdinal(n) {
    let ord = ["st", "nd", "rd"];
    let exceptions = [11, 12, 13];
    let nth =
      ord[(n % 10) - 1] === undefined || exceptions.includes(n % 100)
        ? "th"
        : ord[(n % 10) - 1];
    return n + nth;
  }

  const date = new Date();
  const today = getOrdinal(date.getDate());
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return (
    <Box
      sx={{
        position: "absolute",
        top: {xs: "60px", "2xl": "0px"},
        left: 0,
        zIndex: {xs: 900, "2xl": 1200},
        padding: {xs: "12px 16px", md: "16px 24px"},
        background: theme.palette.lightColor.dark,
        width: '100%',
        boxShadow: 4,
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <Typography variant={"body1"} sx={{fontSize: "17px"}}>
        Welcome Back, Ms. Wilson’s Class.
        {" It's " + month + " " + today + ", " + year}!
      </Typography>
      <NavLink to={'/settings'} style={{textDecoration: "none"}}>
        <Typography variant={"body1"} sx={{fontSize: "17px"}}>
          Settings
        </Typography>
      </NavLink>
    </Box>
  );
};

export default Tooltip;
