import React from "react";
import { Box, Typography } from "@mui/material";
import challengeImg from "../styles/images/cardsImg/challenge.png";

const MonthlyChallengesCard = () => {
  return (
    <Box
      sx={{
        background: "#F3F1F4",
        borderRadius: "20px",
        padding: "14px 0 0 32px",
        width: "50%",
      }}
    >
      <Box
        sx={{ display: "flex", alignItems: "center", gap: "60px", mb: "50px" }}
      >
        <img
          src={challengeImg}
          style={{ width: "50px", height: "50px" }}
          alt={"goals"}
        />
        <Box sx={{ fontSize: "30px" }}>Monthly Challenges</Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "60px",
          mb: "20px",
        }}
      >
        {[1, 2, 3, 4].map((v) => {
          return (
            <Box
              sx={{
                background: "#fff",
                height: "40px",
                borderRadius: "30px 0 0 30px",
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default MonthlyChallengesCard;
