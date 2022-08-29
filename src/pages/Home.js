import React from "react";
import ButtonsCard from "../components/HomePage/ButtonsCard";
import GoalsCard from "../components/HomePage/GoalsCard";
import { Box } from "@mui/material";
import MonthlyChallengesCard from "../components/HomePage/MonthlyChallengesCard";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <ButtonsCard />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "60px",
          height: "100%",
        }}
      >
        <GoalsCard />
        <MonthlyChallengesCard />
      </Box>
    </Box>
  );
};

export default Home;
