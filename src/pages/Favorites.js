import React from "react";
import { Box, Button } from "@mui/material";
import { ReactComponent as HeartIcon } from "../styles/images/heart.svg";
import { ReactComponent as ArrowIcon } from "../styles/images/arrow.svg";
import { theme } from "../styles/theme/theme";

const Favorites = () => {
  return (
    <Box
      sx={{
        background: "#F3F1F4",
        borderRadius: "20px",
        padding: "14px 32px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "20px 20px 20px 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: theme.palette.secondary.main,
          gap: "13px",
          alignSelf: "center",
        }}
      >
        <HeartIcon />
        <Favorites>
          {" "}
          <Button
            sx={{ width: "50px", background: "none" }}
            endIcon={<ArrowIcon />}
          />
        </Favorites>
      </Box>
    </Box>
  );
};

export default Favorites;
