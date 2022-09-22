import React from 'react';
import {Box, Typography} from "@mui/material";
import {theme} from "../../styles/theme/theme";
import regulation from '../../styles/images/langingImg/regulation.png';
import cognitive from '../../styles/images/langingImg/cognitive.png';
import physicalDev from '../../styles/images/langingImg/physicalDev.png';

const IconsBox = () => {
  const icons = [regulation, cognitive, physicalDev];
  return (
    <Box sx={{
      maxWidth: "750px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      alignItems: "center",
      marginTop: "-40px",
      position: "relative"
    }}
    >
      <Typography variant={"h3"} fontSize={"24px"}>justb supports kids</Typography>
      <Box sx={{
        backgroundColor: "#F2F2F2",
        borderRadius: "0 80px 80px 0",
        padding: "15px",
        maxHeight: "130px",
        height: "100%",
        width: "100%",
        boxShadow: theme.shadows[1],
        display: "flex",
        justifyContent: "space-around"
      }}
      >
        {icons.map((icon, i) => {
          return <img key={i} src={icon}/>
        })}
      </Box>
    </Box>
  );
};

export default IconsBox;