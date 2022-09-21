import React from 'react';
import bg from "../styles/images/langingImg/heroBg.svg";
import yellowBg from "../styles/images/langingImg/yellowBg.svg";
import {Container, Box, Avatar, Typography} from "@mui/material";
import appImg from '../styles/images/langingImg/app.png';
import logo from "../styles/images/logo.svg";
import {NavLink} from "react-router-dom";
import {LandingButton} from "../styles/theme/styledComponents";
import MoveWithUsSection from "../components/LandinPage/MoveWithUsSection";
import Testimonials from "../components/LandinPage/Testimonials";

const LandingPage = () => {
  return (
    <Box sx={{width: "100%"}}>
      <Box sx={{
        padding: "0 120px",
        minHeight: "85vh",
        minWidth: "100%",
        display: "flex",
        position: "relative",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        alignItems: "center",
        color: "lightColor.main"
      }}>
        <NavLink to={"/"}>
          <Avatar
            src={logo}
            sx={{
              height: {xs: "70px", "3xl": "100px"},
              width: "auto",
              position: "absolute",
              top: "25px",
              left: "25px",
            }}
          />
        </NavLink>
        <Box sx={{width: "50%", marginLeft: "50px"}}>
          <Typography sx={{fontWeight: 700, color: "inherit", fontSize: "55px", marginBottom: "25px"}}>
            Inclusive and joyful movement videos for kids and teachers
          </Typography>
          <Typography sx={{fontWeight: 700, color: "inherit", fontSize: "24px", marginBottom: "50px"}}>
            Designed by Olympic athletes and occupational therapists</Typography>
          <Box sx={{display: "flex", gap: "60px"}}>
            <LandingButton sx={{backgroundColor: "secondary.dark"}}>Sign Up</LandingButton>
            <LandingButton sx={{backgroundColor: "primary.main"}}>Learn More</LandingButton>
          </Box>
        </Box>
        <Box sx={{maxWidth: "800px"}}>
          <img src={appImg} alt={"App"} width={"100%"}/>
        </Box>
      </Box>
      <MoveWithUsSection/>
      <Testimonials/>
    </Box>
  );
};

export default LandingPage;