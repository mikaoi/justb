import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box, Typography } from "@mui/material";
import { theme } from "../../styles/theme/theme";

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
            fontSize: "45px",
            color: theme.palette.fontColor.dark,
          }}
        >
          {props.value}
        </Box>
        <Box
          sx={{
            fontFamily: "SchemeLt-Regular",
            fontSize: "25px",
          }}
        >
          Minutes
        </Box>
      </Box>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#FFCC1259",
        }}
        size={200}
        thickness={1.2}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="determinate"
        sx={{
          color: theme.palette.secondary.main,
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={200}
        thickness={1.2}
        {...props}
        value={props.value}
      />
    </Box>
  );
};

export default CustomCircularProgress;
