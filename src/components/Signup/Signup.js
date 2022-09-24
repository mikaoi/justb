import React from "react";
import { Box, Typography } from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import { CustomButton, CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";
import woman from "../../styles/images/woman.png";
import school from "../../styles/images/school.png";

const Signup = () => {
  return (
    <CardBox
      sx={{
        paddingX: { xs: "20px", "3xl": "40px" },
        paddingY: "50px",
        display: "flex",
        minHeight: "500px",
        flexDirection: { xs: "column", xl: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        border: "none",
        gap: "30px",
        marginBottom: { xs: "20px", "3xl": "35px" },
      }}
    >
      <CustomButton disableRipple
        sx={{
          width: "200px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={woman}
          style={{ width: "200px", height: "auto", scale: "1.15" }}
          alt={"scan body"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>Indiviual</Typography>
        </Box>
      </CustomButton>
      <CustomButton disableRipple
        sx={{
          width: "200px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={school}
          style={{ width: "200px", height: "auto", scale: "1.19" }}
          alt={"find a class"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>School</Typography>
        </Box>
      </CustomButton>
    </CardBox>
  );
};

export default Signup;
