import React from 'react';
import {Box, Typography} from "@mui/material";
import yellowBg from "../../styles/images/langingImg/yellowBg.svg";
import sensory from '../../styles/images/langingImg/sensory.png';
import professional from '../../styles/images/langingImg/professional.png';
import inclusive from '../../styles/images/langingImg/inclusive.png';
import holistic from '../../styles/images/langingImg/holistic.png';
import page from '../../styles/images/langingImg/page.png';
import {theme} from "../../styles/theme/theme";

const MoveWithUsSection = () => {

  const imgBoxStyles = {
    position: "relative",
    backgroundColor: "#F2F2F2",
    borderRadius: '80px',
    boxShadow: theme.shadows[1],
    height: "65px",
    minWidth: "400px",
  }
  const imgContainer = {
    width: "200px",
    height: '200px',
    position: "absolute",
  }
  return (
    <Box sx={{height: "1342px", width: "100%", marginTop: "-110px"}}>
      <Box sx={{
        padding: "160px 100px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundImage: `url(${yellowBg})`,
        backgroundSize: "cover",
        color: "lightColor.light",
        gap: "35px",
      }}>
        <Box sx={{display: "flex", width: "100%", justifyContent: "space-between"}}>
          <Box sx={{...imgBoxStyles}}>
            <Box sx={{...imgContainer, top: "calc(-165px)"}}>
              <img src={sensory} alt={"Sensory"} width={"100%"}/>
            </Box>
            <Box sx={{...imgContainer, right: 0, top: "calc(-165px)"}}>
              <img src={professional} alt={"Professional"} width={"100%"}/>
            </Box>
          </Box>
          <Typography sx={{fontWeight: "700", fontSize: "64px"}}>move with us!</Typography>
          <Box sx={{...imgBoxStyles}}>
            <Box sx={{...imgContainer, top: "calc(-145px)"}}>
              <img src={inclusive} alt={"Inclusive"} width={"100%"}/>
            </Box>
            <Box sx={{...imgContainer, right: 0, top: "calc(-145px)"}}>
              <img src={holistic} alt={"Holistic"} width={"100%"} height={"100%"}/>
            </Box>
          </Box>
        </Box>
        <Typography sx={{fontSize: "30px", maxWidth: "750px", textAlign: "center", marginBottom: "10px"}}>
          Explore over 70 sensory friendly movement videos kids love!
        </Typography>
        <img src={page} alt={"Page"} width={"100%"}/>
      </Box>
    </Box>
  );
};

export default MoveWithUsSection;