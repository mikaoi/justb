import React from "react";
import { Box } from "@mui/material";
import { ReactComponent as PlayButton } from "../../styles/images/playBtn.svg";

const VideoCard = () => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        borderRadius: "10px",
        border: "1px solid #EAEAEA",
        height: "200px",
        width: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayButton />
    </Box>
  );
};

export default VideoCard;
