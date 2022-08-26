import React from "react";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
import { theme } from "../../styles/theme/theme";

const CustomCircularProgress = (props) => {
  return (
    <Box sx={{ position: "relative", width: "fit-content" }}>
      <Box
        sx={{
          top: "50%",
          left: "50%",
          bottom: 0,
          right: 0,
          transform: "translate(-50%, -50%)",
          position: "absolute",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            display: "block",
            fontSize: "50px",
            fontFamily: "SchemeLt-Regular",
          }}
        >
          {props.value}
        </Box>
        <Box>minutes</Box>
      </Box>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "#FFCC1259",
          // color: (theme) =>
          //   theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
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
