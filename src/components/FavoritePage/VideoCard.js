import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { ReactComponent as PlayButton } from "../../styles/images/playBtn.svg";
import { theme } from "../../styles/theme/theme";

const VideoCard = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: { xs: "550px", xl: "800px" },
    width: "100%",
    height: "80%",
    maxHeight: { xs: "280px", md: "350px", xl: "550px" },
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    pt: 2,
    px: { xs: 2, xl: 4 },
    pb: 3,
  };

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
        <PlayButton onClick={handleOpen} />
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{ margin: "10px" }}
        >
          <Box sx={{ ...style }}>
            <Typography variant={"h2"} align={"center"}>
              Video Modal
            </Typography>
            <iframe
              style={{
                border: 0,
                height: "100%",
                width: "100%",
                borderRadius: "20px",
              }}
              title={"Title"}
              src={"//player.vimeo.com/video/24858420"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen={true}
            />
          </Box>
        </Modal>
      </Button>
    </Box>
  );
};

export default VideoCard;
