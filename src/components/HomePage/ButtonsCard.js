import React from "react";
import {Box} from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import {CustomButton, CardBox} from "../../styles/theme/styledComponents";
import {theme} from "../../styles/theme/theme";

const ButtonsCard = () => {
  return (
    <CardBox
      sx={{
       
        paddingY: "50px",
        paddingZ: "200px",
        height: '300px',
        display: "flex",
        flexDirection: {xs: "column", xl: "row"},
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: theme.shadows[3],
        gap: "1",
        marginBottom: {xs: "10px", "3xl": "50px"},
        width: "1050px"
      }}
    >
      <CustomButton variant="outlined"
                    sx={{
                      minWidth: {xs: "80%", xl: "260px", "3xl": "32%"},
                      borderColor: theme.palette.primary.main,
                    }}
      >
        <img
          src={scan}
          style={{width: "50px", height: "auto", scale: "1.30"}}
          alt={"scan body"}
        />
        <Box sx={{display: "flex", gap: "10px", alignItems: "center"}}>
          Do a Body Scan
        </Box>
      </CustomButton>
      <CustomButton variant="outlined"
                    sx={{
                      minWidth: {xs: "80%", xl: "260px", "3xl": "32%"},
                      borderColor: theme.palette.secondary.main,
                      "&:hover, &:active": {
                        borderColor: theme.palette.secondary.main,
                      },
                    }}
      >
        <img
          src={find}
          style={{width: "50px", height: "auto", scale: "1.30"}}
          alt={"find a class"}
        />
        <Box sx={{display: "flex", gap: "10px", alignItems: "center"}}>
          Find a Class
        </Box>
      </CustomButton>
    </CardBox>
  );
};

export default ButtonsCard;