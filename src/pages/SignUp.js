import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import bg from "../styles/images/signUpImg/frozenBg.png";
import person from "../styles/images/signUpImg/person.png";
import school from "../styles/images/signUpImg/school.png";
import {SignUpBox} from "../styles/theme/styledComponents";
import {NavLink} from "react-router-dom";
import PersonalAccountForm from "../components/SignUp/PersonalAccountForm";
import SchoolCodeForm from "../components/SignUp/SchoolCodeForm";

const SignUp = () => {
  const [variant, setVariant] = useState(0)

  const accountVariantStyles = {
    borderRadius: "20px",
    padding: "25px 50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "28px",
    fontWeight: "700",
    color: "#F6FBF9",
    width: "40%",
    height: "auto",
    textAlign: "center",
    lineHeight: "1.25",
    cursor: "pointer"
  }

  return (
    <Box sx={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat",
      minHeight: '100vh',
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}
    >
      <Box sx={{
        padding: "70px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
      }}>
        <SignUpBox sx={{justifyContent: "space-between"}}>
          {variant === 0 &&
            <>
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "400px",
                gap: "5px",
                alignItems: "center"
              }}>
                <Typography sx={{fontSize: "40px", lineHeight: "1.5"}}>Create An Account</Typography>
                <Typography sx={{color: "inherit", fontSize: "20px", textAlign: "center"}}>
                  Create an account to enjoy all the services without any ads for free!
                </Typography>
              </Box>
              <Box sx={{
                display: "flex",
                gap: "85px",
                justifyContent: "center"
              }}>
                <Box sx={{
                  backgroundColor: "rgba(19, 48, 96, 0.72)",
                  ...accountVariantStyles,
                }}
                     onClick={() => setVariant(1)}
                >
                  <Box sx={{width: "100px", margin: "0 auto 20px"}}>
                    <img src={person} alt={"Person"} width={"100%"}/>
                  </Box>
                  I’m creating a Personal Account
                </Box>
                <Box sx={{
                  ...accountVariantStyles,
                  backgroundColor: "#A7D7C5",
                }}
                     onClick={() => setVariant(2)}
                >
                  <Box sx={{width: "120px", margin: "0 auto"}}>
                    <img src={school} alt={"School"} width={"100%"}/>
                  </Box>
                  <Box maxWidth={"200px"} textAlign={"center"}>
                    I Have a school code
                  </Box>
                </Box>
              </Box>
              <Typography sx={{fontSize: "20px"}}>
                Already Have An Account?&nbsp;
                <NavLink to={"/login"} style={{color: "inherit"}}>Sign In</NavLink>
              </Typography>
            </>
          }
          {variant === 1 && <PersonalAccountForm/>}
          {variant === 2 && <SchoolCodeForm/>}
        </SignUpBox>
      </Box>
    </Box>
  );
};

export default SignUp;