import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as ArrowIcon } from "../styles/images/arrow.svg";
import { theme } from "../styles/theme/theme";
import { CardBox, UnStyledButton } from "../styles/theme/styledComponents";

const BodyScan = () => {
  return (
    <CardBox
      sx={{
        paddingY: "10px",
        paddingX: { xs: "30px", "2xl": "40px", "3xl": "50px" },
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
          marginBottom: { xs: "15px", xl: 0 },
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
        <UnStyledButton endIcon={<ArrowIcon style={{ width: "30px" }} />} />
      </Box>
    </CardBox>
  );
};

export default BodyScan;
