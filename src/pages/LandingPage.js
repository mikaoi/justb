import React from "react";
import bg from "../styles/images/langingImg/heroBg.png";
import { AppBar, Box, Typography } from "@mui/material"; 
import FormLayoutsBasic from "../views/forms/form-layouts/FormLayoutsBasic";
import { CardBox } from "../styles/theme/styledComponents";
import BlankLayout from "../components/MainLayout/BlankLayout";
import { Toolbar}from "@mui/material";
import { Button }from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuItem }from "@mui/material";


const LandingPage = () => {
  return (
    
    <div style={{ backgroundImage: `url(${bg})`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width: "100%", }}>
    <BlankLayout>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuItem />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Box className='content-center'>
    <CardBox
      sx={{
        paddingTop: { xs: "30px", "2xl": "40px" },
        paddingBottom: "15px",
        paddingX: { xs: "30px", "2xl": "40px", "3xl": "50px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "40px", "2xl": "20px" },
        justifyContent: "space-between",
        width: "50%",
        height: "100%",
        boxShadow: 2,
      }}
    >
      <Box>
        <FormLayoutsBasic />
      </Box>
    </CardBox>
    </Box>
    </BlankLayout>
    </div>
  );
};

export default LandingPage;
