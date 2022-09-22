import React from "react";
import bg from "../styles/images/langingImg/heroBg.svg";
import yellowBg from "../styles/images/langingImg/yellowBg.svg";
import { Container, Box, Avatar, Typography } from "@mui/material";
import appImg from "../styles/images/langingImg/app.png";
import logo from "../styles/images/logo.svg";
import { NavLink } from "react-router-dom";
import { LandingButton } from "../styles/theme/styledComponents";
import MoveWithUsSection from "../components/LandinPage/MoveWithUsSection";
import Testimonials from "../components/LandinPage/Testimonials";
import Footer from "../components/LandinPage/Footer";
import { useEffect } from "react";

const LandingPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          padding: "0 120px",
          minHeight: "85vh",
          minWidth: "50%",
          display: "flex",
          position: "relative",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          alignItems: "center",
          color: "lightColor.main",
        }}
      >
        <NavLink to={"/"}>
          <Avatar
            src={logo}
            sx={{
              height: { xs: "70px", "3xl": "100px" },
              width: "auto",
              position: "absolute",
              top: "25px",
              left: "25px",
            }}
          />
        </NavLink>
        <Box sx={{ width: "100%", marginLeft: "50px" }}>
          <Typography
            sx={{
              fontWeight: 700,
              color: "inherit",
              fontSize: "55px",
              marginBottom: "25px",
            }}
          >
            Enriching Lives Through Movement
          </Typography>
          <Typography
            sx={{
              fontWeight: 100,
              color: "inherit",
              fontSize: "30px",
              marginBottom: "50px",
            }}
          >
            An inclusive and interactive movement platform for teachers, kids,
            and classrooms
          </Typography>
          <Box sx={{ display: "flex", gap: "60px" }}>
            <LandingButton  sx={{ backgroundColor: "secondary.dark" }}>
              Sign Up
            </LandingButton>
            <LandingButton href="https://movewithjustb.com/the-people"sx={{ backgroundColor: "primary.main" }}>
              Learn More
            </LandingButton>
          </Box>
        </Box>
        <Box sx={{ maxWidth: "800px" }}>
          <img src={appImg} alt={"App"} width={"100%"} />
        </Box>
      </Box>
      <MoveWithUsSection />
      <Testimonials />
      <Footer />
    </Box>
  );
};

export default LandingPage;
