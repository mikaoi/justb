import React from "react";
import {
  CardBox,
  SearchInput,
  CustomSelect,
} from "../styles/theme/styledComponents";
import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import VideoCard from "../components/FavoritePage/VideoCard";
import {ReactComponent as SelectArrow} from "../styles/images/selectArrow.svg";
import {theme} from "../styles/theme/theme";
import MainLayout from "../components/MainLayout/MainLayout";

const FindAClass = () => {
  const [duration, setDuration] = React.useState("");
  const [activation, setActivation] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [restrictions, setRestrictions] = React.useState("");

  const menuItemStyles = {
    fontWeight: 400,
    fontFamily: "Scheme"
  }

  const durationItems=["Under 5 Minutes", "5-10 Minutes", "10-15 Minutes", "15+ Minutes"];
  const activationItems=["Activating", "Centered", "Deactivating"];
  const skillsItems=["Balance", "Mindfulness", "Bilateral Coordination", "Crossing the midline"];
  const restrictionItems= ["Limited floor space","No jumping or stomping" ];


  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };
  const handleActivationChange = (event) => {
    setActivation(event.target.value);
  };
  const handleSkillsChange = (event) => {
    setSkills(event.target.value);
  };
  const handleRestrictionsChange = (event) => {
    setRestrictions(event.target.value);
  };

  return (
    <MainLayout>
      <CardBox
        sx={{
          paddingTop: {xs: "30px", "2xl": "40px"},
          paddingBottom: "15px",
          paddingX: {xs: "30px", "2xl": "40px", "3xl": "50px"},
          display: "flex",
          flexDirection: "column",
          gap: {xs: "40px", "2xl": "20px"},
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          boxShadow: 2,
        }}
      >
        <SearchInput placeholder={"Search"}
                     sx={{alignSelf: "center", "& input": {height: "20px", padding: "5px"}}}/>
        <Stack>
          <Typography sx={{marginBottom: "15px", textAlign: "center"}}>Select your preferences with the filters below</Typography>
          <Typography variant={"bold"} marginBottom={"10px"}>
            Filters
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: {xs: 2, "3xl": 3},
              flexDirection: {xs: "column", md: "row"},
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: {xs: 2, "3xl": 3},
                flexDirection: {xs: "column", "3xl": "row"},
              }}
            >
              <Box sx={{maxWidth: "350px", width: "100%"}}>
                <FormControl fullWidth focused={false}>
                  <InputLabel
                    variant={"outlined"}
                    sx={{display: duration && "none"}}
                  >
                    Duration
                  </InputLabel>
                  <CustomSelect
                    value={duration}
                    label="Duration"
                    onChange={handleDurationChange}
                    IconComponent={() => (
                      <SelectArrow
                        style={{fill: theme.palette.fontColor.main}}
                      />
                    )}
                  >
                    {durationItems.map((item, i)=>
                      <MenuItem key={i} value={i+1} sx={{...menuItemStyles}}>{item}</MenuItem>
                    )}
                  </CustomSelect>
                </FormControl>
              </Box>
              <Box sx={{maxWidth: "350px", width: "100%"}}>
                <FormControl fullWidth focused={false}>
                  <InputLabel
                    variant={"outlined"}
                    sx={{
                      display: activation && "none",
                    }}
                  >
                    Activation Need
                  </InputLabel>
                  <CustomSelect
                    value={activation}
                    label="Activation"
                    onChange={handleActivationChange}
                    IconComponent={() => (
                      <SelectArrow
                        style={{fill: theme.palette.fontColor.main}}
                      />
                    )}
                  >
                    {activationItems.map((item, i)=>
                      <MenuItem key={i} value={i+1} sx={{...menuItemStyles}}>{item}</MenuItem>
                    )}
                  </CustomSelect>
                </FormControl>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: {xs: 2, "3xl": 3},
                flexDirection: {xs: "column", "3xl": "row"},
              }}
            >
              <Box sx={{maxWidth: "350px", width: "100%"}}>
                <FormControl fullWidth focused={false}>
                  <InputLabel
                    variant={"outlined"}
                    sx={{display: skills && "none"}}
                  >
                    Skills
                  </InputLabel>
                  <CustomSelect
                    value={skills}
                    label="Skills"
                    onChange={handleSkillsChange}
                    IconComponent={() => (
                      <SelectArrow
                        style={{fill: theme.palette.fontColor.main}}
                      />
                    )}
                  >
                    {skillsItems.map((item, i)=>
                      <MenuItem key={i} value={i+1} sx={{...menuItemStyles}}>{item}</MenuItem>
                    )}
                  </CustomSelect>
                </FormControl>
              </Box>
              <Box sx={{maxWidth: "350px", width: "100%"}}>
                <FormControl fullWidth focused={false}>
                  <InputLabel
                    variant={"outlined"}
                    sx={{
                      display: restrictions && "none",
                      color: theme.palette.lightColor.light,
                    }}
                  >
                    Restrictions
                  </InputLabel>
                  <CustomSelect
                    value={restrictions}
                    defaultValue={"Restrictions"}
                    label="Restrictions"
                    onChange={handleRestrictionsChange}
                    IconComponent={() => (
                      <SelectArrow
                        style={{fill: theme.palette.lightColor.light}}
                      />
                    )}
                    sx={{
                      backgroundColor: "secondary.main",
                      color: "lightColor.light",
                    }}
                  >
                    {restrictionItems.map((item, i)=>
                      <MenuItem key={i} value={i+1} sx={{...menuItemStyles}}>{item}</MenuItem>
                    )}
                  </CustomSelect>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack gap={1}>
          <Typography variant={"subtitle1"} component={"span"}>
            justb’s most popular classes
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <Stack spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: {xs: "center", xl: "space-between"},
                  flexWrap: "wrap",
                  gap: "20px",
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((v, i) => {
                  return <VideoCard key={i}/>;
                })}
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Typography variant={"caption"} component={"span"}>
          Showing 6 of 70 Classes
        </Typography>
      </CardBox>
    </MainLayout>
  );
};

export default FindAClass;
