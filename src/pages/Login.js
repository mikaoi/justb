import React from 'react';
import {Avatar, Box} from "@mui/material";
import logo from "../styles/images/logo.svg";
import LoginForm from "../components/LoginPage/LoginForm";

const Login = () => {
  return (
    <Box sx={{
      background: "white",
      minHeight: "100vh",
      padding: "0 20px",
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid #E6E9FA",
        borderRadius: "24px",
        maxWidth: "1200px",
        maxHeight: "740px",
        width: "100%",
        height: "100%"
      }}>
        <Box sx={{
          width: "70%",
          display: {xs: "none", "xl": "flex"},
          alignItems: "center",
          justifyContent: "center"
        }}
        >
          <Avatar
            src={logo}
            sx={{
              height: {xs: "150px", "2xl": "250px"},
              width: "auto",
              marginTop: "-50px"
            }}
          />
        </Box>
        <LoginForm/>
      </Box>
    </Box>
  );
};

export default Login;