import React, {useMemo, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import {ReactComponent as ArrowIcon} from "../styles/images/btnImages/arrow.svg";
import {theme} from "../styles/theme/theme";
import {CardBox, YellowButton} from "../styles/theme/styledComponents";
import activated from '../styles/images/bodyScanImg/activated.png';
import centered from '../styles/images/bodyScanImg/centered.png';
import deactivated from '../styles/images/bodyScanImg/deactivated.png';
import scale from '../styles/images/bodyScanImg/scale.png'
import VideoCard from "../components/FavoritePage/VideoCard";
import MainLayout from "../components/MainLayout/MainLayout";
import {NavLink} from "react-router-dom";

const BodyScan = () => {
  const activationInfo = [
    {character: activated, text: "Activated"},
    {character: centered, text: "Centered"},
    {character: deactivated, text: "De-activated"}
  ];

  const [activation, setActivation] = useState(0)
  const [scanning, setScanning] = useState(true)

  const position = useMemo(() => {
    if (activation === 1) {
      return 'start'
    } else if (activation === 2) {
      return "center"
    } else if (activation === 3) {
      return "end"
    }
  }, [activation])


  return (
    <MainLayout>
      <CardBox
        sx={{
          paddingY: "40px",
          paddingX: {xs: "30px", "2xl": "40px", "3xl": "50px"},
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          boxShadow: theme.shadows[2],
        }}
      >
        {scanning
          ? <Box sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: 'center'
          }}>
            <Box sx={{
              backgroundColor: "#BBBBBB",
              width: "100%",
              borderRadius: "40px",
              boxShadow: theme.shadows[1],
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              maxHeight: "600px"
            }}>
              <Typography sx={{textTransform: "uppercase"}}>
                Placeholder
              </Typography>
            </Box>
            <YellowButton onClick={() => setScanning(false)}>
              Start your body scan
              <ArrowIcon/>
            </YellowButton>
          </Box>
          :
          <Box sx={{display: "flex", width: "100%", gap: {xs: "10px", "4xl": "40px"}}}>
            <Box sx={{
              display: "flex",
              paddingTop: "20px",
              flexDirection: 'column',
              gap: "10px",
              marginRight: {xs: "10px", "4xl": "60px"}
            }}
            >
              {activationInfo.map((item, i) => {
                return <Box key={i} sx={{textAlign: "center", cursor: "pointer"}} onClick={() => setActivation(i + 1)}>
                  <img src={item.character} alt={"Activated"} style={{maxHeight: "190px"}}/>
                  <Typography sx={{textShadow: "0px 3px 4px rgba(150, 150, 150, 1)"}}>{item.text}</Typography>
                </Box>
              })}
            </Box>
            <img src={scale} alt={"Scale"}
                 style={{maxHeight: "730px", height: "100%", marginTop: "-20px", paddingTop: "40px"}}
            />
            <Box>
              <Box sx={{
                backgroundColor: "lightColor.light",
                padding: "12px",
                borderRadius: "32px",
                marginTop: "-10px",
                marginBottom: "10px"
              }}>
                <Typography sx={{fontSize: "25px"}}>
                  Click on your current activation level!
                </Typography>
              </Box>
              <Box sx={{
                display: activation === 0
                  ? "none"
                  : "flex"
                ,
                flexDirection: "column",
                height: "95%",
                justifyContent: position
              }}>
                <Box sx={{
                  display: "flex",
                  gap: "15px",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "40px",
                  padding: "15px 25px",
                  background: theme.palette.lightColor.light,
                  boxShadow: "-2px 12px 20px rgba(0, 0, 0, 0.25)"
                }}>
                  <Typography>Get moving with a {activation !== 0 && activationInfo[activation - 1].text.toLowerCase()} class</Typography>
                  <Box sx={{
                    display: "flex",
                    gap: "40px"
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
                  <YellowButton to={'/favorites/:category'} sx={{fontSize: "18px"}} component={NavLink}>
                    More {activation !== 0 && activationInfo[activation - 1].text} Classes
                    <ArrowIcon/>
                  </YellowButton>
                </Box>
              </Box>
            </Box>
          </Box>
        }
      </CardBox>
    </MainLayout>
  );
};

export default BodyScan;
