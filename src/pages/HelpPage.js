import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import FaqAccordions from "../components/faq/FaqAccordions";
import FaqHeader from "../components/faq/FaqHeader";
import FaqFooter from "../components/faq/FaqFooter";
import AccordionControlled from "../components/faq/AccordionControlled";

// ** Other imports
// ** React Imports
import { Fragment, useEffect, useState } from "react";

// ** MUI Imports
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(14.25, 24, 0, 24),
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(14.25, 0, 0)
  },
  '& > :not(:first-of-type)': {
    marginTop: theme.spacing(13)
  }
}))

const HelpPage = () => {
  return (
    <MainLayout>
      <FaqHeader />
      
      <Box
        sx={{
          paddingBottom: '50px',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          textAlign: 'center',
          justifyContent: 'center',
          
        }}
      >
        <Typography
          sx={{
            fontSize: "10px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
         
        </Typography>
      </Box>
      <Box sx={{
        marginTop: '-75px'
      }}>
      <AccordionControlled/>
      </Box>
    </MainLayout>
  );
};

export default HelpPage;
