import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CardBox } from "../../styles/theme/styledComponents";
import { theme } from "../../styles/theme/theme";

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
></CardBox>;
