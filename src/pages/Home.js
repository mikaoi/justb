import React from "react";
import ButtonsCard from "../components/HomePage/ButtonsCard";
import GoalsCard from "../components/HomePage/GoalsCard";
import {Box} from "@mui/material";
import MonthlyChallengesCard from "../components/HomePage/MonthlyChallengesCard";
import Tooltip from "../components/HomePage/Tooltip";
import MainLayout from "../components/MainLayout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingX: {xs: 0, "2xl": "30px", "3xl": "60px", "4xl": "90px"}
        }}
      >
        <Tooltip/>
        <ButtonsCard/>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", xl: "row"},
            gap: {xs: "30px", "3xl": "45px"},
            height: "100%",
          }}
        >
          <GoalsCard/>
          <MonthlyChallengesCard/>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;

