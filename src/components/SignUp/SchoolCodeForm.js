import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import MuiInputBase from "@mui/material/InputBase";
import {FormButton, VariantItem} from "../../styles/theme/styledComponents";
import SuccessRegistration from "./SuccessRegistration";

const SchoolCodeForm = ({returnToFirst}) => {
  const [step, setStep] = useState(1)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const onBackHandler = () => {
    if (step === 1) {
      returnToFirst(0)
    } else {
      setStep(prevState => prevState - 1)
    }
  }
  const onNextHandler = () => {
    setStep(prevState => prevState + 1)
  }

  const questionStyles = {
    fontFamily: "SchemeBk-Regular",
    fontSize: "37px",
    lineHeight: "1.2",
    maxWidth: "500px",
    fontWeight: 400,
    color: "inherit",
    textAlign: "center"
  }


  return (
    <Box sx={{
      height: "100%",
      minHeight: "530px",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px"
    }}>
      {isSuccessful ? <SuccessRegistration/>
        :
        <>
          {step === 1 &&
            <>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{fontSize: "40px", fontWeight: "700", marginBottom: "10px"}}>School-Code</Typography>
                <Typography sx={{fontFamily: "Karla", maxWidth: "250px", fontSize: "18px", textAlign: "center"}}>Please enter School-Code (Check email) </Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"School-Code"}/>
              </Box>
            </>
          }
          {step === 2 &&
            <>
              <Typography sx={{...questionStyles}}>School Account</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "20px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"Username"}/>
                <MuiInputBase placeholder={"School Email"}/>
                <MuiInputBase placeholder={"Password"}/>
              </Box>
            </>
          }
          {step === 3 &&
            <>
              <Typography sx={{...questionStyles}}>I am a:</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px", width: "100%"}}>
                <VariantItem>General Educator</VariantItem>
                <VariantItem>Special Needs Educator</VariantItem>
                <VariantItem>Physical Educator</VariantItem>
                <VariantItem>Adapted Physical Educator</VariantItem>
              </Box>
            </>
          }
          {step === 4 &&
            <>
              <Typography sx={{...questionStyles}}>How many students are typically in your class? </Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "470px", width: "100%"}}>
                <MuiInputBase placeholder={"ex: 20"}/>
              </Box>
            </>
          }
          {step === 5 &&
            <>
              <Typography sx={{...questionStyles}}>How old are your students?</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "470px", width: "100%"}}>
                <MuiInputBase placeholder={"Age"}/>
              </Box>
            </>
          }
          {step === 6 &&
            <>
              <Typography sx={{...questionStyles}}>Does the child (children) have a learning difference (e.g. Autism or ADHD)?</Typography>
              <Box sx={{display: "flex", gap: "30px"}}>
                <FormButton sx={{backgroundColor: "#FEE040", color: "inherit"}}
                            onClick={() => setIsSuccessful(true)}
                >
                  Yes
                </FormButton>
                <FormButton sx={{backgroundColor: "#FEE040", color: "inherit"}}
                            onClick={() => setIsSuccessful(true)}
                >
                  No
                </FormButton>
              </Box>
            </>
          }

          <Box sx={{display: "flex", gap: "30px"}}>
            <FormButton onClick={() => onBackHandler()}
                        sx={{backgroundColor: "fontColor.main", color: "white"}}>
              Back
            </FormButton>
            {step !== 6 &&
              <FormButton onClick={() => onNextHandler()}
                          sx={{backgroundColor: "#FEE040", color: "inherit"}}>
                Next
              </FormButton>
            }
          </Box>
        </>
      }
    </Box>
  );
};

export default SchoolCodeForm;