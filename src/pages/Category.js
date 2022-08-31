import React from "react";
import { CardBox } from "../styles/theme/styledComponents";
import { theme } from "../styles/theme/theme";
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from "../components/FavoritePage/VideoCard";
import { useParams } from "react-router-dom";

const Category = () => {
  // const { category } = useParams();
  return (
    <CardBox
      sx={{
        paddingY: "30px",
        paddingX: { xs: "30px", "2xl": "40px", "3xl": "50px" },
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        boxShadow: theme.shadows[2],
      }}
    >
      <Typography>Category</Typography>
      <Stack spacing={"20px"} marginBottom={2}>
        <Stack spacing={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", xl: "space-between" },
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
              return <VideoCard key={i} />;
            })}
          </Box>
        </Stack>
      </Stack>
      <Typography variant={"caption"} component={"span"}>
        Showing 6 of 70 Classes
      </Typography>
    </CardBox>
  );
};

export default Category;
