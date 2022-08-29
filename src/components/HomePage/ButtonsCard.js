import React from "react";
import { Box } from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import { ReactComponent as Arrow } from "../../styles/images/btnImages/arrow.svg";
import { CustomButton, CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";

const ButtonsCard = () => {
  return (
    <CardBox
      sx={{
        minHeight: "230px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        padding: "40px",
        alignItems: "center",
        justifyContent: "space-around",
        boxShadow: theme.shadows[1],
      }}
    >
      <CustomButton sx={{ minWidth: { xs: "350px", sm: "43%" } }}>
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
      <CustomButton sx={{ minWidth: { xs: "350px", sm: "43%" } }}>
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
