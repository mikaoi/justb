import React from "react";
import ButtonsCard from "../components/HomePage/ButtonsCard";
import GoalsCard from "../components/HomePage/GoalsCard";
import {Box} from "@mui/material";
import MonthlyChallengesCard from "../components/HomePage/MonthlyChallengesCard";
import Tooltip from "../components/HomePage/Tooltip";

const Home = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingX: {xs: 1, "2xl": "100px"}
        }}
      >
        <Tooltip/>
        <ButtonsCard/>
        <Box
          sx={{
            display: "flex",
            flexDirection: {xs: "column", xl: "row"},
            gap: {xs: "30px", "3xl": "60px"},
            height: "100%",
          }}
        >
          <GoalsCard/>
          <MonthlyChallengesCard/>
        </Box>
      </Box>
    </>
  );
};

export default Home;
