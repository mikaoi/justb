import { CustomButton, CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";
import woman from "../../styles/images/woman.png";
import school from "../../styles/images/school.png";

// MUI Imports
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AccountType = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingTop: "50px",
      }}
    >
      <CustomButton
        sx={{
          width: "200px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={woman}
          style={{ width: "100px", height: "auto", scale: "1.15" }}
          alt={"woman"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>Indiviual</Typography>
        </Box>
      </CustomButton>
      <CustomButton
        disableRipple
        sx={{
          width: "200px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={school}
          style={{ width: "100px", height: "auto", scale: "1.19" }}
          alt={"find a class"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Typography>School</Typography>
        </Box>
      </CustomButton>
    </Box>
  );
};
export default AccountType;
