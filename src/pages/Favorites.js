import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as HeartIcon } from "../styles/images/heart.svg";
import { ReactComponent as ArrowIcon } from "../styles/images/arrow.svg";
import { theme } from "../styles/theme/theme";
import VideoCard from "../components/FavoritePage/VideoCard";

const Favorites = () => {
  return (
    <Box
      sx={{
        background: "#F3F1F4",
        borderRadius: "20px",
        padding: "14px 32px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "20px 20px 20px 0",
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
          Favorites
        </Box>
        <Button
          sx={{
            width: "50px",
            background: "none",
            alignSelf: "flex-end",
          }}
          endIcon={<ArrowIcon />}
        />
      </Box>
      Deactivating Classes
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
      Activating Classes
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
      Neutral Classes
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
    </Box>
  );
};

export default Favorites;
