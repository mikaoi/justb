import React, {useState} from 'react';
import {Box, Typography, Input, Button, TextField} from "@mui/material";
import {ReactComponent as MailIcon} from "../../styles/images/mail.svg";
import {ReactComponent as LockIcon} from "../../styles/images/lock.svg";
import {ReactComponent as OpenEye} from "../../styles/images/inputEye.svg";
import {ReactComponent as CloseEye} from "../../styles/images/inputEyeClose.svg";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/theme/theme";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false)

  const InputStyles = {
    padding: "8px 35px",
    height: "40px",
    underline: "none",
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
  const btnStyles = {
    height: "40px",
    borderRadius: "40px",
    fontFamily: "SchemeRg-Regular",
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    textTransform: "unset",
    fontSize: '20px',
    "&:hover": {
      boxShadow: theme.shadows[4],
      color: "inherit"
    },
  }

  const onVisibleHandler = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowPassword(prevState => !prevState)
  }

  return (
    <Box sx={{
      backgroundColor: "rgba(234, 192, 179, 0.07)",
      padding: "60px 30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: 'center',
      alignItems: 'center',
      gap: '35px',
      maxWidth: "460px"
    }}>
      <Typography fontSize={"34px"}>Welcome to justb!</Typography>
      <Typography textAlign={"center"}
                  fontFamily={"Scheme"}
                  fontWeight={300}
                  fontSize={"24px"}>
        An inclusive and interactive movement platform for teachers, kids, and classrooms
      </Typography>
      <Box sx={{padding: "20px", width: "100%"}}>
        <Box component={"form"}
             sx={{
               display: "flex",
               flexDirection: "column",
               gap: '16px',
               marginBottom: "24px"
             }}>
          <Box sx={{position: "relative"}}>
            <Input placeholder={"Email"} sx={{...InputStyles}}/>
            <MailIcon style={{position: "absolute", left: "8px", top: "6px"}}/>
          </Box>
          <Box sx={{position: "relative"}}>
            <Input placeholder={"Password"} sx={{...InputStyles}}/>
            <LockIcon style={{position: "absolute", left: "8px", top: "6px"}}/>
            <Box sx={{position: "absolute", right: "8px", top: "8px", cursor: "pointer"}}
                 onClick={(e) => onVisibleHandler(e)}>
              {showPassword ? <OpenEye/> : <CloseEye/>}
            </Box>
          </Box>
          <Box component={NavLink} to={'/'} sx={{alignSelf: "end", textDecoration: "none", color: "#6F74DD", fontSize: "15px"}}>
            Forgot password?
          </Box>
          <Button sx={{
            ...btnStyles,
            color: theme.palette.lightColor.light,
            background: theme.palette.fontColor.main
          }}
          >
            Log in</Button>
        </Box>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          gap: '16px',
        }}>
          <Typography>Have no account yet?</Typography>
          <Button sx={{...btnStyles, color: "#3949AB", border: "1px solid #3949AB", width: "100%"}}
                  component={NavLink}
                  to={"/signup"}
          >Registration</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;