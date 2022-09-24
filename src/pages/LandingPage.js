import { React, useState } from "react";
import bg from "../styles/images/langingImg/heroBg.png";
import { AppBar, Box, Typography } from "@mui/material";
import FormLayoutsBasic from "../views/forms/form-layouts/FormLayoutsBasic";
import { CardBox } from "../styles/theme/styledComponents";
import BlankLayout from "../components/MainLayout/BlankLayout";
import VideoCard from "../components/FavoritePage/VideoCard";

import School from "../styles/images/school.png";
import Indiviual from "../styles/images/woman.png";

// ** MUI Imports
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid } from "mdi-material-ui";
import { Person } from "@mui/icons-material";

const LandingPage = () => {
  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100vh",

        // keeps page from scrolling
      }}
    >
      <BlankLayout>
        {/* <Box sx={{ flexGrow: 1 }}>
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
        </Box> */}
        <Box
          className="content-center"
          sx={{
            flexGrow: 1,
            height: "fit-content(20em)",
          }}
        >
          <CardBox
            sx={{
              paddingTop: { xs: "20px", "2xl": "40px" },
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
              <Typography sx={{fontSize: '40px', textAlign: 'center'}}>Are you a School or Indiviual?</Typography>
            </Box>

            <Box>
              {/* First component will go here */}
            </Box>

          </CardBox>
        </Box>
      </BlankLayout>{" "}
      {/* Blank Page */}
    </div>
  );
};

export default LandingPage;
