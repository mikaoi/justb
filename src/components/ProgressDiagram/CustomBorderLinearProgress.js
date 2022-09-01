import React from "react";
import { Box, Typography } from "@mui/material";
import BorderLinearProgress from "./BorderLinearProgress";

const CustomBorderLinearProgress = (props) => {
  return (
    <Box sx={{ position: "relative", width: props.width || "210px" }}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          bottom: 0,
          right: 0,
          transform: "translate(-50%, -50%)",
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          zIndex: 40,
          color: "lightColor.light",
          fontSize: "20px",
          whiteSpace: "nowrap",
        }}
      >
      </Box>
      <BorderLinearProgress {...props} />
    </Box>
  );
};

export default CustomBorderLinearProgress;
