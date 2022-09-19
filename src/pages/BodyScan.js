import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import {ReactComponent as ArrowIcon} from "../styles/images/arrow.svg";
import {theme} from "../styles/theme/theme";
import {CardBox, UnStyledButton} from "../styles/theme/styledComponents";
import activated from '../styles/images/bodyScanImg/activated.png';
import centered from '../styles/images/bodyScanImg/centered.png';
import deactivated from '../styles/images/bodyScanImg/deactivated.png';
import scale from '../styles/images/bodyScanImg/scale.png'
import VideoCard from "../components/FavoritePage/VideoCard";
import MainLayout from "../components/MainLayout/MainLayout";

const BodyScan = () => {
  const activation = [{character: activated, text: "Activated"}, {character: centered, text: "Centered"}, {character: deactivated, text: "Deactivated"}]

  return (
    <MainLayout>
      <CardBox
        sx={{
          paddingY: "20px",
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
            <Typography variant={"h2"} component={"span"}>
              Body Scan
            </Typography>
          </Box>
          <UnStyledButton endIcon={<ArrowIcon style={{width: "30px"}}/>}/>
        </Box>
        <Box sx={{display: "flex", width: "100%", gap: {xs: "10px", "4xl": "40px"}}}>
          <Box sx={{display: "flex", flexDirection: 'column', gap: "10px", marginRight: {xs: "10px", "4xl": "60px"}}}>
            {activation.map((item, i) => {
              return <Box key={i} sx={{textAlign: "center"}}>
                <img src={item.character} alt={"Activated"} style={{maxHeight: "190px"}}/>
                <Typography sx={{textShadow: "0px 3px 4px rgba(150, 150, 150, 1)"}}>{item.text}</Typography>
              </Box>
            })}
          </Box>
          <img src={scale} alt={"Scale"}
               style={{maxHeight: "720px", marginTop: "-20px"}}
          />
          <Box sx={{
            display: "flex",
            gap: "40px",
            maxHeight: "220px",
            borderRadius: "40px",
            padding: "40px 25px",
            background: theme.palette.lightColor.light,
            boxShadow: "-2px 12px 20px rgba(0, 0, 0, 0.25)"
          }}>
            <Stack sx={{textAlign: "center", gap: "8px"}}>
              <VideoCard bodyScan short/>
              <Typography variant={"subtitle2"}>Short Class</Typography>
            </Stack>
            <Stack sx={{textAlign: "center", gap: "8px"}}>
              <VideoCard bodyScan long/>
              <Typography variant={"subtitle2"}>Long Class</Typography>
            </Stack>
          </Box>
        </Box>
      </CardBox>
    </MainLayout>
  );
};

export default BodyScan;
