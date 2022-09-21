import React from "react";
import { Box, Typography } from "@mui/material";
import blueBg from "../../styles/images/langingImg/blueBg.svg";
import page from "../../styles/images/langingImg/page.png";
import footerCharacter from "../../styles/images/langingImg/footerCharacter.png"
import {LandingButton} from "../../styles/theme/styledComponents";

import footerLink from "../../styles/images/langingImg/footerLinks.png"

const Footer = () => {
  return (
    <Box sx={{ height: "1000px", width: "100%", marginTop: "-200px" }}>
      <Box
        sx={{
          padding: "100px 10px",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${blueBg})`,
          backgroundSize: "cover",
          color: "lightColor.light",
          gap: "100px",
         
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "65%",
            justifyContent: "space-between",
            marginTop:"250px"
          }}
        >
           <img src={footerCharacter} alt={"Characters"} width={"100%"}/>
        </Box>
        <Box sx={{
             display: "flex",
             flexDirection: "column",
             alignItems: "center",
        }}>
        <LandingButton sx={{backgroundColor: "primary.main", color: "#31476E", padding: '15px'}}>Get Moving</LandingButton>
        <Box 
        sx={{
            marginTop:"100px"
        }}
        >
        <img src={footerLink} alt={"Page"} width={"100%"}/>
        </Box>
        
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
