import React from "react";
import {Box, Typography, Stack} from "@mui/material";
import {ReactComponent as HeartIcon} from "../styles/images/heart.svg";
import {ReactComponent as ArrowIcon} from "../styles/images/arrow.svg";
import {theme} from "../styles/theme/theme";
import VideoCard from "../components/FavoritePage/VideoCard";
import {CardBox, UnStyledButton} from "../styles/theme/styledComponents";
import {NavLink} from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";

const Favorites = () => {
  const classes = [
    "Deactivating Classes",
    "Activating Classes",
    "Neutral Classes",
  ];

  return (
    <MainLayout>
      <CardBox
        sx={{
          paddingY: "10px",
          paddingX: {xs: "30px", "2xl": "40px", "3xl": "50px"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          boxShadow: theme.shadows[2],
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: theme.palette.secondary.main,
            marginBottom: {xs: "15px", xl: 0},
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "13px",
              width: "100%",
            }}
          >
            <HeartIcon/>
            <Typography variant={"h2"} component={"span"}>
              Favorites
            </Typography>
          </Box>
          <UnStyledButton endIcon={<ArrowIcon style={{width: "30px"}}/>}/>
        </Box>
        <Stack spacing={"12px"} marginBottom={2}>
          {classes.map((value, i) => {
            return (
              <Stack key={i} spacing={1}>
                <NavLink
                  to={"/favorites/:category"}
                  style={{textDecoration: "none", color: "#31476E"}}
                >
                  {value}
                </NavLink>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: {xs: "center", xl: "space-between"},
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  {[1, 2, 3].map((v, i) => {
                    return <VideoCard key={i}/>;
                  })}
                </Box>
              </Stack>
            );
          })}
        </Stack>
        <Typography variant={"caption"} component={"span"}>
          Showing 6 of 70 Classes
        </Typography>
      </CardBox>
    </MainLayout>
  );
};

export default Favorites;
