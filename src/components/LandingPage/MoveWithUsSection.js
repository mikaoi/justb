import React from "react";
import {Box, Typography} from "@mui/material";
import page from "../../styles/images/langingImg/page.png";
import {LandingButton} from "../../styles/theme/styledComponents";
import bg from "../../styles/images/langingImg/yellowBg.svg";


const MoveWithUsSection = () => {
  return (
    <Box sx={{
      maxHeight: "1300px",
      height: "100%",
      width: "100%",
      marginTop: "-200px",
      position: "relative",
      minHeight: "calc(100vh + 100px)",
      display: "flex",
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
    }}>
      <Box
        sx={{
          padding: "175px 200px",
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
        <img src={page} alt={"Page"} width={"110%"} style={{marginBottom: "50px"}}/>
        <LandingButton sx={{padding: "10px", backgroundColor: "fontColor.main", color: "lightColor.light", maxWidth: "250px", width: "100%"}}>
          Lets get moving
        </LandingButton>
      </Box>
    </Box>
  );
};

export default MoveWithUsSection;
