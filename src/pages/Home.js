import React from "react";
import ButtonsCard from "../components/ButtonsCard";
import GoalsCard from "../components/GoalsCard";
import { Box } from "@mui/material";
import MonthlyChallengesCard from "../components/MonthlyChallengesCard";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        margin: "0 50px 0 0",
      }}
    >
      <ButtonsCard />
      <Box
        sx={{
          display: "flex",
          gap: "60px",
        }}
      >
        <GoalsCard />
        <MonthlyChallengesCard />
      </Box>
    </Box>
  );
};

export default Home;
