import React from "react";
import { Box, Typography } from "@mui/material";
import { CardBox } from "../../styles/theme/styledComponents";
import challengeImg from "../../styles/images/cardsImg/challenge.png";
import { theme } from "../../styles/theme/theme";

const MonthlyChallengesCard = () => {
  return (
    <CardBox
      sx={{
        padding: { xs: "14px 0 0 20px", "3xl": "14px 0 0 32px" },
        width: { xs: "100%", xl: "50%" },
        position: "relative",
        boxShadow: theme.shadows[2],
      }}
    >
      <img
        src={challengeImg}
        style={{ width: "50px", height: "50px", position: "absolute" }}
        alt={"challenge"}
      />
      <Box
        sx={{
          paddingTop: "10px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <Typography variant={"h2"} component={"span"}>
          Monthly Challenges
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          mb: "20px",
        }}
      >
        {[1, 2, 3, 4].map((v, i) => {
          return (
            <Box
              key={i}
              sx={{
                background: theme.palette.lightColor.light,
                height: "50px",
                borderRadius: "30px 0 0 30px",
              }}
            />
          );
        })}
      </Box>
    </CardBox>
  );
};

export default MonthlyChallengesCard;
