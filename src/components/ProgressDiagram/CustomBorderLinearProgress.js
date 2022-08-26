import React from "react";
import { Box } from "@mui/material";
import BorderLinearProgress from "./BorderLinearProgress";

const CustomBorderLinearProgress = (props) => {
  return (
    <Box sx={{ position: "relative", width: props.width || "220px" }}>
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
          color: "#fff",
          fontSize: "20px",
          whiteSpace: "nowrap",
        }}
      >
        {props.showValue && "12/15 Classes"}
      </Box>
      <BorderLinearProgress {...props} />
    </Box>
  );
};

export default CustomBorderLinearProgress;
