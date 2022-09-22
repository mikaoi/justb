import React from 'react';
import {Avatar, Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import logo from "../../styles/images/logo.svg";
import {LandingButton} from "../../styles/theme/styledComponents";

const Header = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "space-between",
      padding: "5px 20px",
      alignItems: "center",
      height: "80px"
    }}>
      <NavLink to={"/"}>
        <Avatar
          src={logo}
          sx={{
            height: "50px",
            width: "auto",
          }}
        />
      </NavLink>
      <Box sx={{display: "flex", gap: "20px"}}>
        <LandingButton target={"_blank"} rel={"noopenner norefferer"} href="https://movewithjustb.com/the-people" sx={{backgroundColor: "primary.main"}}>
          Learn More
        </LandingButton>
        <LandingButton sx={{backgroundColor: "primary.main"}}>
          Sign in
        </LandingButton>
      </Box>
    </Box>
  );
};

export default Header;