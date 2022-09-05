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
        paddingTop: { xs: "30px", "2xl": "40px" },
        paddingBottom: "15px",
        paddingX: { xs: "30px", "2xl": "40px", "3xl": "50px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "40px", "2xl": "20px" },
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
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, "3xl": 3 },
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: { xs: 2, "3xl": 3 },
              flexDirection: { xs: "column", "3xl": "row" },
            }}
          >
            <Box sx={{ maxWidth: "350px", width: "100%" }}>
              <FormControl fullWidth focused={false}>
                <InputLabel
                  variant={"outlined"}
                  sx={{ display: duration && "none" }}
                >
                  Duration
                </InputLabel>
                <CustomSelect
                  value={duration}
                  label="Duration"
                  onChange={handleDurationChange}
                  IconComponent={() => (
                    <SelectArrow
                      style={{ fill: theme.palette.fontColor.main }}
                    />
                  )}
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </CustomSelect>
              </FormControl>
            </Box>
            <Box sx={{ maxWidth: "350px", width: "100%" }}>
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
                      style={{ fill: theme.palette.fontColor.main }}
                    />
                  )}
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </CustomSelect>
              </FormControl>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              gap: { xs: 2, "3xl": 3 },
              flexDirection: { xs: "column", "3xl": "row" },
            }}
          >
            <Box sx={{ maxWidth: "350px", width: "100%" }}>
              <FormControl fullWidth focused={false}>
                <InputLabel
                  variant={"outlined"}
                  sx={{ display: skills && "none" }}
                >
                  Skills
                </InputLabel>
                <CustomSelect
                  value={skills}
                  label="Skills"
                  onChange={handleSkillsChange}
                  IconComponent={() => (
                    <SelectArrow
                      style={{ fill: theme.palette.fontColor.main }}
                    />
                  )}
                >
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                </CustomSelect>
              </FormControl>
            </Box>
            <Box sx={{ maxWidth: "350px", width: "100%" }}>
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
          <Stack spacing={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", xl: "space-between" },
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {[1, 2, 3, 4, 5, 6].map((v, i) => {
                return <VideoCard key={i} />;
              })}
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Typography variant={"caption"} component={"span"}>
        Showing 6 of 70 Classes
      </Typography>
    </CardBox>
  );
};

export default FindAClass;
