import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import MuiInputBase from "@mui/material/InputBase";
import {FormButton, VariantItem} from "../../styles/theme/styledComponents";
import SuccessRegistration from "./SuccessRegistration";
import {useForm} from "react-hook-form";

const SchoolCodeForm = ({returnToFirst}) => {
  const [step, setStep] = useState(1)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [profession, setProfession] = useState('')
  const professions = ["General Educator", "Special Needs Educator", "Physical Educator", "Adapted Physical Educator"]
  const answers = ["Yes", "No"]
  const [learningDifference, setLearningDifference] = useState('')

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const personalAccountData = {...data, learningDifference, profession}
    console.log(personalAccountData);
    setIsSuccessful(true)
  }


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
    fontSize: {xs: "30px", "xl": "36px"},
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
        <Box onSubmit={handleSubmit(onSubmit)}
             component={"form"}
             sx={{
               height: "100%",
               width: "100%",
               minHeight: "530px",
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
               justifyContent: "space-between",
               gap: "40px"
             }}
        >
          {step === 1 &&
            <>
              <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <Typography sx={{fontSize: {xs: "30px", "xl": "40px"}, fontWeight: "700", marginBottom: "10px"}}>School-Code</Typography>
                <Typography sx={{fontFamily: "Karla", maxWidth: "250px", fontSize: "18px", textAlign: "center"}}>Please enter School-Code (Check email) </Typography>
              </Box>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"School-Code"} {...register("code")}/>
              </Box>
            </>
          }
          {step === 2 &&
            <>
              <Typography sx={{...questionStyles}}>School Account</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "20px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"Username"} {...register("username")}/>
                <MuiInputBase placeholder={"School Email"} {...register("email")}/>
                <MuiInputBase placeholder={"Password"} {...register("password")} type={"password"}/>
              </Box>
            </>
          }
          {step === 3 &&
            <>
              <Typography sx={{...questionStyles}}>I am a:</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "20px", maxWidth: "400px", width: "100%"}}>
                {professions.map((value, i) =>
                  <VariantItem key={i} onClick={() => setProfession(value)}
                               sx={{border: profession === value ? "1px solid #FEE040" : "1px solid rgba(0, 0, 0, 0.1)"}}
                  >{value}</VariantItem>
                )}
              </Box>
            </>
          }
          {step === 4 &&
            <>
              <Typography sx={{...questionStyles}}>How many students are typically in your class?</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "470px", width: "100%"}}>
                <MuiInputBase placeholder={"ex: 20"} {...register("students")}/>
              </Box>
            </>
          }
          {step === 5 &&
            <>
              <Typography sx={{...questionStyles, minHeight: "85px"}}>How old are your students?</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "470px", width: "100%"}}>
                <MuiInputBase placeholder={"Age"} {...register("age")}/>
              </Box>
            </>
          }
          {step === 6 &&
            <>
              <Typography sx={{...questionStyles}}>Does the child (children) have a learning difference (e.g. Autism or ADHD)?</Typography>
              <Box sx={{display: "flex", gap: "30px", flexDirection: {xs: "column", "xl": "row"}}}>
                {answers.map((answer, i) =>
                  <FormButton key={i} type={"submit"} sx={{backgroundColor: "#FEE040", color: "inherit"}}
                              onClick={() => setLearningDifference(answer)}
                  >
                    {answer}
                  </FormButton>
                )}
              </Box>
            </>
          }
          <Box sx={{display: "flex", gap: "30px", flexDirection: {xs: "column", "xl": "row"}}}>
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
        </Box>
      }
    </Box>
  );
};

export default SchoolCodeForm;