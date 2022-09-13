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
        alignContent:'center',
        paddingY: "14px",
        paddingX: {xs: "20px", "3xl": "32px"},
        display: "flex",
        width: {xs: "100%", xl: "50%"},
        flexDirection: "column",
        boxShadow: theme.shadows[2],
      }}
    >
      <Box
        sx={{
          paddingTop: "5px",
          display: "flex",
          justifyContent: "center",
          marginBottom: 2,
          alignContent: 'center',
          textAlign: 'center'
        }}
      >
        <img
        src={goalsImg}
        style={{width: "50px", height: "50px", position: "relative", bottom:'10px'}}
        alt={"goals"}
      />
        <Typography variant={"h5"} component={"span"} sx={{paddingLeft: "20px", alignContent: 'center', textAlign: 'center', marginRight: '50px' }}>
          Weekly Challenges
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
          gap: {xs: "25px", xl: "40px"},
          alignContent: 'center',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Stack spacing={1} alignItems={"center"} sx={{marginBottom: "20px"}}>
            <Typography variant={"h6"} component={"span"}>
              Classes Completed
            </Typography>
            <Typography variant={"h6"} component={"span"}>
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
            gap: "25px",
          }}
        >
          <Typography variant={"h6"} component={"span"} sx={{paddingLeft: "10px", }}>Weekly Move Minutes</Typography>
          <CustomCircularProgress value={60}/>
        </Box>
      </Box>
    </CardBox>
  );
};

export default GoalsCard;
