import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import { ReactComponent as HeartIcon } from "../styles/images/heart.svg";
import { ReactComponent as ArrowIcon } from "../styles/images/arrow.svg";
import { theme } from "../styles/theme/theme";
import VideoCard from "../components/FavoritePage/VideoCard";
import { CardBox } from "../styles/theme/styledComponents";

const Favorites = () => {
  const classes = [
    "Deactivating Classes",
    "Activating Classes",
    "Neutral Classes",
  ];

  return (
    <CardBox
      sx={{
        padding: "15px 70px",
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
          <HeartIcon />
          <Typography variant={"h2"} component={"span"}>
            Favorites
          </Typography>
        </Box>
        <Button
          sx={{
            color: "transparent",
            backgroundColor: "transparent",
            alignSelf: "flex-end",
            "&:hover, &:active": {
              opacity: 0.8,
              outline: "none",
              backgroundColor: "transparent",
            },
          }}
          endIcon={<ArrowIcon />}
        />
      </Box>
      <Stack spacing={"20px"} marginBottom={2}>
        {classes.map((value, i) => {
          return (
            <Stack key={i} spacing={1}>
              <Typography>{value}</Typography>
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
      </Stack>
      <Typography variant={"caption"} component={"span"}>
        Showing 6 of 70 Classes
      </Typography>
    </CardBox>
  );
};

export default Favorites;
