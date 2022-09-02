import React from "react";
import { Box } from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import { ReactComponent as Arrow } from "../../styles/images/btnImages/arrow.svg";
import { CustomButton, CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";
import MonthlyChallengesCard from "./MonthlyChallengesCard";

const ButtonsCard = () => {
  return (
    <CardBox
      sx={{
        padding: { xs: "50px 20px", "3xl": "100px 40px" },
        display: "flex",
        flexDirection: { xs: "column", xl: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: theme.shadows[1],
        marginBottom: { xs: 2, "3xl": 3 },
        gap: "30px",
      }}
    >
      <CustomButton variant="outlined"
        sx={{
          minWidth: { xs: "80%", xl: "250px", "3xl": "43%" },
        }}
      >
        <img
          src={scan}
          style={{ width: "40px", height: "40px" }}
          alt={"scan body"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          Do a Body Scan!
          <Arrow />
        </Box>
      </CustomButton>
      <CustomButton variant="outlined"
        sx={{
          minWidth: { xs: "80%", xl: "250px", "3xl": "43%" },
        }}
      >
        <img
          src={find}
          style={{ width: "40px", height: "40px" }}
          alt={"find a class"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          Find a class!
          <Arrow />
        </Box>
      </CustomButton>
    </CardBox>
  
  );
};

export default ButtonsCard;
