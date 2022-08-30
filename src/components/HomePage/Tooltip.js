import React from "react";
import { Box, Typography } from "@mui/material";
import { theme } from "../../styles/theme/theme";

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
        marginTop: "-20px",
        padding: "16px 24px",
        background: theme.palette.lightColor.light,
        maxWidth: "350px",
        borderRadius: "20px",
      }}
    >
      <Typography variant={"subtitle2"}>
        {month + " " + today + ", " + year + ", Let’s get "}
        <Box sx={{ color: "secondary.main" }} component={"span"}>
          moving!
        </Box>
      </Typography>
    </Box>
  );
};

export default Tooltip;