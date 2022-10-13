import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import MuiInputBase from "@mui/material/InputBase";
import {FormButton, VariantItem} from "../../styles/theme/styledComponents";
import SuccessRegistration from "./SuccessRegistration";

import {useForm} from "react-hook-form";



const PersonalAccountForm = ({returnToFirst}) => {
  const [step, setStep] = useState(1)
  const [isSuccessful, setIsSuccessful] = useState(false)

  const [profession, setProfession] = useState('')
  const professions = ["Student", "Parent", "Therapist", "Teacher"]
  const answers = ["Yes", "No"]
  const [learningDifference, setLearningDifference] = useState('')

  const {register, handleSubmit} = useForm()

  const onSubmit = (data) => {
    const personalAccountData = {...data, learningDifference, profession}
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
              <Typography sx={{fontSize: {xs: "30px", "xl": "36px"}, fontWeight: "700", marginBottom: "10px"}}>Personal Account</Typography>
              <Box sx={{display: "flex", flexDirection: "column", gap: "35px", maxWidth: "450px", width: "100%"}}>
                <MuiInputBase placeholder={"Username"} {...register("username")}/>
                <MuiInputBase placeholder={"Email"} {...register("email")}/>
                <MuiInputBase placeholder={"Password"} {...register("password")} type={"password"}/>

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

                {professions.map((value, i) =>
                  <VariantItem key={i} onClick={() => setProfession(value)}
                               sx={{border: profession === value ? "1px solid #FEE040" : "1px solid rgba(0, 0, 0, 0.1)"}}
                  >{value}</VariantItem>
                )}

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

                <MuiInputBase placeholder={"Age"} {...register("age")}/>

                <MuiInputBase placeholder={"Age"}/>

              </Box>
            </>
          }
          {step === 4 &&
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
          <Box sx={{display: "flex", gap: "30px", flexDirection: {xs: "column", lg: "row"}}}>

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

        </Box>
        </>
      }
    </Box>
  );
};

export default PersonalAccountForm;