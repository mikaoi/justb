import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import goalsImg from "../../styles/images/cardsImg/goals.png";
import CustomCircularProgress from "../ProgressDiagram/CustomCircularProgress";
import CustomBorderLinearProgress from "../ProgressDiagram/CustomBorderLinearProgress";
import {CardBox} from "../../styles/theme/styledComponents";
import {theme} from "../../styles/theme/theme";

const GoalsCard = () => {
  return (
    <CardBox
      sx={{
        paddingY: "14px",
        paddingX: {xs: "20px", "3xl": "32px"},
        width: {xs: "100%", xl: "50%"},
        display: "flex",
        flexDirection: "column",
        boxShadow: theme.shadows[2],
      }}
    >
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          marginBottom: 4,
        }}
      >
        <img
        src={goalsImg}
        style={{width: "50px", height: "50px", position: "absolute", top: '10px', left: '125px'}}
        alt={"goals"}
      />
        <Typography variant={"h5"} component={"span"} sx={{paddingLeft: "35px"}}>
          Weekly Challenges
        </Typography>
      </Box>
      <Box
        sx={{
        
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          gap: {xs: "25px", xl: "60px"},
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} alignItems={"center"} sx={{marginBottom: "3px"}}>
            <Typography variant={"h4"} component={"span"}>
              Classes Completed
            </Typography>
            <Typography variant={"h4"} component={"span"}>
              12/15
            </Typography>
          </Stack>
          <CustomBorderLinearProgress
            variant="determinate"
            value={80}
            showvalue={"true"}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <Typography variant={"h6"}>Weekly Move Minutes</Typography>
          <CustomCircularProgress value={60}/>
        </Box>
      </Box>
    </CardBox>
  );
};

export default GoalsCard;
