


import React from "react";
import { Box, Typography } from "@mui/material";
import { CardBox } from "../../styles/theme/styledComponents";


import Stepper from '../Signup/Stepper'
import AccountType from '../Signup/AccountType'
import { Account } from "mdi-material-ui";

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
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Stepper/>
      <AccountType/>
            </Box>
    </CardBox>

  );
};

export default Signup;
