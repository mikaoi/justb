import React from "react";
import MainLayout from "../components/MainLayout/MainLayout";
import FaqAccordions from "../components/faq/FaqAccordions"
import FaqHeader from "../components/faq/FaqHeader"
import FaqFooter from "../components/faq/FaqFooter"
import AccordionControlled from "../components/faq/AccordionControlled";

// ** Other imports
// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// ** Icons Imports
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'




const HelpPage = () => {
  return (
    <MainLayout>
    <FaqHeader/>
    <AccordionControlled/>
    </MainLayout>


 ) 
};

export default HelpPage;
