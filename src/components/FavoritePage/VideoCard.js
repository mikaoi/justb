import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as PlayButton } from "../../styles/images/playBtn.svg";
import { theme } from "../../styles/theme/theme";

const VideoCard = () => {
  return (
    <Box
      sx={{
        background: theme.palette.lightColor.light,
        borderRadius: "10px",
        border: "1px solid #EAEAEA",
        height: "170px",
        width: { xs: "220px", xl: "27%" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .4s",
        "&:hover": {
          boxShadow: theme.shadows[2],
        },
      }}
    >
      <Button
        sx={{
          color: "transparent",
          backgroundColor: "transparent",
          "&:hover, &:active": {
            opacity: 0.8,
            outline: "none",
            backgroundColor: "transparent",
          },
        }}
      >
        <PlayButton />
      </Button>
    </Box>
  );
};

export default VideoCard;
