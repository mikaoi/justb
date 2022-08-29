import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as PlayButton } from "../../styles/images/playBtn.svg";

const VideoCard = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "10px",
        border: "1px solid #EAEAEA",
        height: "170px",
        width: "220px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
