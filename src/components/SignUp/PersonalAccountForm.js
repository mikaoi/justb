import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import MuiInputBase from "@mui/material/InputBase";
import {FormButton, VariantItem} from "../../styles/theme/styledComponents";
import SuccessRegistration from "./SuccessRegistration";

const PersonalAccountForm = ({returnToFirst}) => {
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
      {isSuccessful ?
        <SuccessRegistration/>
        :
        <>
          {step === 1 &&
            <>
              <Typography sx={{fontSize: "36px", fontWeight: "700", marginBottom: "10px"}}>Personal Account</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"Username"}/>
                <MuiInputBase placeholder={"Email"}/>
                <MuiInputBase placeholder={"Password"}/>
              </Box>
            </>
          }
          {step === 2 &&
            <>
              <Typography sx={{...questionStyles}}>Who are you?</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "20px", maxWidth: "270px", width: "100%"}}>
                <VariantItem>Student</VariantItem>
                <VariantItem>Parent</VariantItem>
                <VariantItem>Therapist</VariantItem>
                <VariantItem>Teacher</VariantItem>
              </Box>
            </>
          }
          {step === 3 &&
            <>
              <Typography sx={{...questionStyles}}>How old is the child (children) using this account?</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "470px", width: "100%"}}>
                <MuiInputBase placeholder={"Age"}/>
              </Box>
            </>
          }
          {step === 4 &&
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
            {step !== 4 &&
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

export default PersonalAccountForm;