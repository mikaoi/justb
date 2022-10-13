import React from 'react';
import {Box} from "@mui/material";
import Link from "@mui/material/Link";
import {NavLink} from "react-router-dom";

const DashboardFooter = () => {
  const footerLinks = ["Learn More", "Contact", "Help&Resources", "Terms Of Service", "Privacy Policy"]
  return (
    <Box sx={{
      backgroundColor: "secondary.main",
      padding: {xs: "20px", xl: "20px 50px"},
      height: {xs:"max-content", lg:"50px"},
      display: "flex",
      flexDirection: {xs: "column", lg: "row"},
      marginLeft: "-15px",
      color: "white",
      justifyContent: "center",
      gap: "15px",
      alignItems: "center"
    }}>
      {footerLinks.map((link, i) =>
        <Link key={i} as={NavLink} to={'/'}
              sx={{color: "white", fontSize: "17px"}}
        >{link}
        </Link>
      )}
    </Box>
  );
};

export default DashboardFooter;