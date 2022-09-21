import React from "react";
import { Box, Typography } from "@mui/material";
import blueBg from "../../styles/images/langingImg/blueBg.svg";
import page from "../../styles/images/langingImg/page.png";

const Footer = () => {
  return (
    <Box sx={{ height: "1342px", width: "100%", marginTop: "-110px" }}>
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
          marginTop:'200px'
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
      </Box>
    </Box>
  );
};

export default Footer;
