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
import { ReactComponent as SelectArrow } from "../styles/images/selectArrow.svg";
import { theme } from "../styles/theme/theme";

const FindAClass = () => {
  const [duration, setDuration] = React.useState("");
  const [activation, setActivation] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [restrictions, setRestrictions] = React.useState("");

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
    <CardBox
      sx={{
        padding: "40px 70px 15px 70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        boxShadow: 2,
      }}
    >
      <SearchInput placeholder={"Search"} sx={{ alignSelf: "center" }} />
      <Stack>
        <Typography variant={"bold"} marginBottom={"10px"}>
          Filters
        </Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box sx={{ maxWidth: "210px", width: "100%" }}>
            <FormControl fullWidth focused={false}>
              <InputLabel variant={duration ? "standard" : "outlined"}>
                Duration
              </InputLabel>
              <CustomSelect
                value={duration}
                label="Duration"
                onChange={handleDurationChange}
                IconComponent={() => (
                  <SelectArrow style={{ fill: theme.palette.fontColor.main }} />
                )}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>
            </FormControl>
          </Box>
          <Box sx={{ maxWidth: "210px", width: "100%" }}>
            <FormControl fullWidth focused={false}>
              <InputLabel variant={activation ? "standard" : "outlined"}>
                Activation Need
              </InputLabel>
              <CustomSelect
                value={activation}
                label="Activation"
                onChange={handleActivationChange}
                IconComponent={() => (
                  <SelectArrow style={{ fill: theme.palette.fontColor.main }} />
                )}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>
            </FormControl>
          </Box>
          <Box sx={{ maxWidth: "210px", width: "100%" }}>
            <FormControl fullWidth focused={false}>
              <InputLabel variant={skills ? "standard" : "outlined"}>
                Skills
              </InputLabel>
              <CustomSelect
                value={skills}
                label="Skills"
                onChange={handleSkillsChange}
                IconComponent={() => (
                  <SelectArrow style={{ fill: theme.palette.fontColor.main }} />
                )}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>
            </FormControl>
          </Box>
          <Box sx={{ maxWidth: "210px", width: "100%" }}>
            <FormControl fullWidth focused={false}>
              <InputLabel
                sx={{ color: theme.palette.lightColor.light }}
                variant={restrictions ? "standard" : "outlined"}
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
                    style={{ fill: theme.palette.lightColor.light }}
                  />
                )}
                sx={{
                  backgroundColor: "secondary.main",
                  color: "lightColor.light",
                }}
              >
                <MenuItem value={1}>Option 1</MenuItem>
                <MenuItem value={2}>Option 2</MenuItem>
                <MenuItem value={3}>Option 3</MenuItem>
              </CustomSelect>
            </FormControl>
          </Box>
        </Box>
      </Stack>
      <Stack gap={1}>
        <Typography variant={"subtitle1"} component={"span"}>
          justb faves
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {[1, 2].map((value, i) => {
            return (
              <Stack key={i} spacing={2}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {[1, 2, 3].map((v, i) => {
                    return <VideoCard key={i} />;
                  })}
                </Box>
              </Stack>
            );
          })}
        </Box>
      </Stack>
      <Typography variant={"caption"} component={"span"}>
        Showing 6 of 70 Classes
      </Typography>
    </CardBox>
  );
};

export default FindAClass;
