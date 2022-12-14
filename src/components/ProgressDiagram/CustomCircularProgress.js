import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const CustomCircularProgress = (props) => {
  return (
    <Box sx={{ position: "relative", width: "fit-content" }}>
      <Box
        sx={{
          top: "53%",
          left: "50%",
          bottom: 0,
          right: 0,
          transform: "translate(-50%, -50%)",
          position: "absolute",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            fontFamily: "SchemeLt-Regular",
            fontSize: "26px",
            color: "fontColor",
          }}
        >
          {props.value}
        </Box>
        <Box
          sx={{
            fontFamily: "SchemeLt-Regular",
            fontSize: "26px",
          }}
        >
          Minutes
        </Box>
      </Box>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "secondary.light",
        }}
        size={170}
        thickness={5}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: "secondary.main",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={170}
        thickness={5}
        {...props}
        value={props.value}
      />
    </Box>
  );
};

export default CustomCircularProgress;
