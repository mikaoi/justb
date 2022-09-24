import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import { CustomButton, CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";
import woman from "../../styles/images/woman.png";
import school from "../../styles/images/school.png";

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Account Type', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent:'center', paddingTop: '50px'}}>
        <CustomButton onClick={handleNext}
                    sx={{
                      width: "200px",
                      borderColor: theme.palette.primary.main,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={woman}
                      style={{ width: "100px", height: "auto", scale: "1.15" }}
                      alt={"woman"}
                    />
                    <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <Typography>Indiviual</Typography>
                    </Box>
                  </CustomButton>
                  <CustomButton disableRipple
        sx={{
          width: "200px",
          borderColor: theme.palette.primary.main,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          src={school}
          style={{ width: "100px", height: "auto", scale: "1.19" }}
          alt={"find a class"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                      <Typography>School</Typography>
                    </Box>
        </CustomButton>
        </Box>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}


// import React from "react";
// import { Box, Typography } from "@mui/material";



// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';

// const steps = ['School or person', 'Create an ad group', 'Create an ad'];



// const Signup = () => {
//   return (
//     <CardBox
//       sx={{
//         paddingX: { xs: "20px", "3xl": "40px" },
//         paddingY: "50px",
//         display: "flex",
//         minHeight: "500px",
//         flexDirection: { xs: "column", xl: "row" },
//         alignItems: "center",
//         justifyContent: "space-around",
//         border: "none",
//         gap: "30px",
//         marginBottom: { xs: "20px", "3xl": "35px" },
//       }}
//     >
//       <CustomButton disableRipple
//         sx={{
//           width: "200px",
//           borderColor: theme.palette.primary.main,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <img
//           src={woman}
//           style={{ width: "200px", height: "auto", scale: "1.15" }}
//           alt={"scan body"}
//         />
//         <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
//           <Typography>Indiviual</Typography>
//         </Box>
//       </CustomButton>
//       <CustomButton disableRipple
//         sx={{
//           width: "200px",
//           borderColor: theme.palette.primary.main,
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <img
//           src={school}
//           style={{ width: "200px", height: "auto", scale: "1.19" }}
//           alt={"find a class"}
//         />
//         <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
//           <Typography>School</Typography>
//         </Box>
//       </CustomButton>
//     </CardBox>
    
    
    
//   );
// };

// export default Signup;
