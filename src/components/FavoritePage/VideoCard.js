import React, {useState} from "react";
import {Box, Button, Modal, Typography} from "@mui/material";
import {ReactComponent as PlayButton} from "../../styles/images/playBtn.svg";
import {theme} from "../../styles/theme/theme";
import {ReactComponent as Close} from "../../styles/images/navImg/closeBtn.svg";
import {UnStyledButton} from "../../styles/theme/styledComponents";

const VideoCard = ({bodyScan, short, long}) => {
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
    maxWidth: {xs: "550px", xl: "800px"},
    width: "100%",
    height: "80%",
    maxHeight: {xs: "280px", md: "350px", xl: "550px"},
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    pt: 2,
    px: {xs: 2, xl: 4},
    pb: 3,
  };

  const videoStyle = {
    position: "relative",
    background: theme.palette.lightColor.light,
    borderRadius: "10px",
    border: "1px solid #EAEAEA",
    height: "160px",
    width: {xs: "220px", xl: "25%"},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .4s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[2],
    },
  };

  const bodyScanVideo = {
    position: "relative",
    background: short ? theme.palette.fontColor.main : theme.palette.primary.dark,
    borderRadius: "4px",
    border: "1px solid #EAEAEA",
    height: "140px",
    width: {xs: "100%", xl: "150px", "4xl": "200px"},
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all .4s",
    cursor: "pointer",
    "&:hover": {
      boxShadow: theme.shadows[2],
    },
  };

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={bodyScan ? {...bodyScanVideo} : {...videoStyle}}
      >
        <UnStyledButton
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <PlayButton style={{fill: !long ? "#B9B9B9" : "#fff", width: bodyScan ? "30px" : "45px"}}/>
        </UnStyledButton>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{margin: "10px"}}
      >
        <Box sx={{...style}}>
          <Typography variant={"h2"} align={"center"}>
            Video Modal
          </Typography>
          <UnStyledButton
            sx={{
              position: "absolute",
              top: "10px",
              right: "15px",
              padding: "10px",
            }}
            onClick={handleClose}
          >
            <Close
              style={{
                width: "18px",
                height: "18px",
                fill: theme.palette.fontColor.main,
              }}
            />
          </UnStyledButton>
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
    </>
  );
};

export default VideoCard;
