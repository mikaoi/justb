import React from "react";
import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme/theme";

const Tooltip = () => {
  return (
    <Box
      sx={{
        padding: {xs: "12px 16px", md: "16px 24px"},
        background: theme.palette.lightColor.light,
        maxWidth: "360px",
        borderRadius: "20px",
      }}
    >
      <Typography variant={"subtitle2"}>
        Welcome Ms.Wilson’s Class!
      </Typography>
    </Box>
  );
};

export default Tooltip;
