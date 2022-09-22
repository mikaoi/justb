import React from "react";
import {Box, Typography} from "@mui/material";
import {ReactComponent as BgY} from "../../styles/images/langingImg/yellowBg.svg";
import {ReactComponent as IconsBlock} from "../../styles/images/langingImg/iconsBlock.svg";
import icons from "../../styles/images/langingImg/icons.png";
import page from "../../styles/images/langingImg/page.png";
import {LandingButton} from "../../styles/theme/styledComponents";


const MoveWithUsSection = () => {
  return (
    <Box sx={{maxHeight: "1200px", height: "100%", width: "100%", marginTop: "-110px", position: "relative"}}>
      <Box sx={{position: "absolute", left: "-10%", width: "120%", height: "100%"}}>
        <BgY style={{width: "100%", height: "100%"}}/>
      </Box>
      <Box sx={{position: "absolute", width: "70%", height: "200px"}}>
        <IconsBlock style={{width: "100%", height: "100%"}}/>
      </Box>
      <Box sx={{position: "absolute", left: "50px", top: "-100px", height: "250px"}}>
        <img src={icons} style={{width: "100%", height: "100%"}} alt={"Icons"}/>
      </Box>
      <Box
        sx={{
          padding: "150px 200px",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          color: "lightColor.light",
          gap: "35px",
          zIndex: 20
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
        </Box>
        <Typography
          variant={"h3"}
          sx={{
            fontSize: "28px",
            width: "100%",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Explore a few of justb's most popular classes for free!
        </Typography>
        <img src={page} alt={"Page"} width={"110%"}/>
        <LandingButton sx={{ padding:"10px", backgroundColor: "fontColor.main", color:"lightColor.light", maxWidth:"250px", width:"100%"}}>
          Lets get moving
        </LandingButton>
      </Box>
    </Box>
  );
};

export default MoveWithUsSection;
