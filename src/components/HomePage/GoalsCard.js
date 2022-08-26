import React from "react";
import { Box } from "@mui/material";
import goalsImg from "../../styles/images/cardsImg/goals.png";
import CustomCircularProgress from "../ProgressDiagram/CustomCircularProgress";
import CustomBorderLinearProgress from "../ProgressDiagram/CustomBorderLinearProgress";

const GoalsCard = () => {
  return (
    <Box
      sx={{
        background: "#F3F1F4",
        borderRadius: "20px",
        padding: "14px 32px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "60px" }}>
        <img
          src={goalsImg}
          style={{ width: "50px", height: "50px" }}
          alt={"goals"}
        />
        <Box sx={{ fontSize: "30px" }}> Weekly Goals</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ fontFamily: "SchemeBk-Regular", textAlign: "center" }}>
            <Box>Classes Completed</Box>
            <Box>12/15</Box>
          </Box>
          <CustomBorderLinearProgress
            variant="determinate"
            value={80}
            showvalue={"true"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box sx={{ fontFamily: "SchemeBk-Regular", textAlign: "center" }}>
            Monthly Move Minutes
          </Box>
          <CustomCircularProgress value={60} />
        </Box>
      </Box>
    </Box>
  );
};

export default GoalsCard;
