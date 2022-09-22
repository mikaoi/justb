import React from "react";
import bg from "../styles/images/langingImg/heroBg.png";
import {Box, Typography} from "@mui/material";
import appImg from "../styles/images/langingImg/app.png";
import {LandingButton} from "../styles/theme/styledComponents";
import MoveWithUsSection from "../components/LandingPage/MoveWithUsSection";
import Testimonials from "../components/LandingPage/Testimonials";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import IconsBox from "../components/LandingPage/IconsBox";

const LandingPage = () => {
  return (
    <Box sx={{
      color: "lightColor.main",
      overflow: "hidden",
      backgroundColor: "#F2F2F2"
    }}>
      <Header/>
      <Box
        sx={{
          paddingTop: "130px",
          paddingX: "120px",
          minHeight: "calc(100vh + 100px)",
          display: "flex",
          position: "relative",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            height: "100%"
          }}
        >
          <Box sx={{marginLeft: "50px"}}>
            <Typography
              sx={{
                fontWeight: 700,
                color: "inherit",
                fontSize: "40px",
                marginBottom: "15px",
              }}
            >
              Enriching Lives Through Movement
            </Typography>
            <Typography
              sx={{
                fontWeight: 100,
                color: "inherit",
                fontSize: "24px",
                marginBottom: "50px",
              }}
            >
              An inclusive and interactive movement platform for teachers, kids,
              and classrooms
            </Typography>
            <LandingButton sx={{padding: "10px", backgroundColor: "primary.main"}}>
              get moving
            </LandingButton>
          </Box>
          <Box sx={{maxWidth: "800px"}}>
            <img src={appImg} alt={"App"} width={"100%"}/>
            <Typography sx={{
              textAlign: "center",
              marginTop: "-16px",
              fontSize: "15px",
              color: "inherit"
            }}>
              Designed by Olympic athletes OT’s, teachers, and kids!
            </Typography>
          </Box>
        </Box>
      </Box>
      <MoveWithUsSection/>
      <IconsBox/>
      <Testimonials/>
      <Footer/>
    </Box>
  );
};

export default LandingPage;
