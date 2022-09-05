import React from "react";
import {Box} from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import {ReactComponent as Arrow} from "../../styles/images/btnImages/arrow.svg";
import {CustomButton, CardBox} from "../../styles/theme/styledComponents";
import {theme} from "../../styles/theme/theme";

const ButtonsCard = () => {
  return (
    <CardBox
      sx={{
        paddingX: {xs: "20px", "3xl": "40px"},
        paddingY: "50px",
        display: "flex",
        flexDirection: {xs: "column", xl: "row"},
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: theme.shadows[1],
        gap: "30px",
      }}
    >
      <CustomButton variant="outlined"
                    sx={{
                      minWidth: {xs: "80%", xl: "260px", "3xl": "35%"},
                      borderColor: theme.palette.primary.main,
                    }}
      >
        <img
          src={scan}
          style={{width: "60px", height: "auto", scale: "1.15"}}
          alt={"scan body"}
        />
        <Box sx={{display: "flex", gap: "10px", alignItems: "center"}}>
          Do a Body Scan!
        </Box>
      </CustomButton>
      <CustomButton variant="outlined"
                    sx={{
                      minWidth: {xs: "80%", xl: "260px", "3xl": "35%"},
                      borderColor: theme.palette.secondary.main,
                      "&:hover, &:active": {
                        borderColor: theme.palette.secondary.main,
                      },
                    }}
      >
        <img
          src={find}
          style={{width: "60px", height: "auto", scale: "1.19"}}
          alt={"find a class"}
        />
        <Box sx={{display: "flex", gap: "10px", alignItems: "center"}}>
          Find a class!
        </Box>
      </CustomButton>
    </CardBox>
  );
};

export default ButtonsCard;