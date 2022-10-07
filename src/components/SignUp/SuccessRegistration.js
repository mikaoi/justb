import React from 'react';
import {Box, Typography} from "@mui/material";
import {FormButton} from "../../styles/theme/styledComponents";
import {NavLink} from "react-router-dom";

const SuccessRegistration = () => {
  return (
    <Box sx={{
      minHeight: "500px",
      height: "100%",
      justifyContent: "center",
      margin: "auto 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "40px"
    }}>
      <Typography sx={{fontSize: "40px", textAlign: "center"}}>
        Congratulations! Your account has been successfully created.
      </Typography>
      <NavLink to={"/login"} style={{color: "inherit", textDecoration: "none"}}>
        <FormButton sx={{backgroundColor: "#FEE040", color: "inherit"}}>Continue</FormButton>
      </NavLink>
    </Box>
  );
};

export default SuccessRegistration;