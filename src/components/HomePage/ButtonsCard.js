import React from "react";
import { Button, Box } from "@mui/material";
import scan from "../../styles/images/btnImages/bodyScan.png";
import find from "../../styles/images/btnImages/findAClass.png";
import { ReactComponent as Arrow } from "../../styles/images/btnImages/arrow.svg";

const ButtonsCard = () => {
  return (
    <Box
      sx={{
        background: "#F3F1F4",
        height: "230px",
        display: "flex",
        marginTop: "40px",
        padding: "40px",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
      }}
    >
      <Button variant={"custom"} sx={{ width: "45%" }}>
        <img
          src={scan}
          style={{ width: "40px", height: "40px" }}
          alt={"scan body"}
        />
        <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
          Do a Body Scan!
          <Arrow />
        </Box>
      </Button>

      <Button variant={"custom"} sx={{ width: "45%" }}>
        <img
          src={find}
          style={{ width: "40px", height: "40px" }}
          alt={"find a class"}
        />
        Find a class!
        <Arrow />
      </Button>
    </Box>
  );
};

export default ButtonsCard;
