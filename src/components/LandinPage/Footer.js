import React from "react";
import {Box, Link} from "@mui/material";
import blueBg from "../../styles/images/langingImg/blueBg.svg";
import footerCharacter from "../../styles/images/langingImg/footerCharacter.png"
import {ReactComponent as FacebookIcon} from "../../styles/images/footerImg/facebookIcon.svg";
import {ReactComponent as InstagramIcon} from "../../styles/images/footerImg/instIcon.svg";
import {LandingButton} from "../../styles/theme/styledComponents";
import {NavLink} from "react-router-dom";
import {theme} from "../../styles/theme/theme";

const Footer = () => {
  const links = ["Help & Resources", "Contact", "Terms & Services", "Privacy Policy"];

  const iconLinkStyles = {
    boxShadow: theme.shadows[1],
    height: "51px"
  }

  return (
    <Box sx={{width: "100%", marginTop: "-170px"}}>
      <Box
        sx={{
          padding: "50px",
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          backgroundImage: `url(${blueBg})`,
          backgroundSize: "cover",
          color: "lightColor.light",
          gap: "200px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "60px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "65%",
              justifyContent: "space-between",
              marginTop: "250px"
            }}
          >
            <img src={footerCharacter} alt={"Characters"} width={"100%"}/>
          </Box>
          <LandingButton sx={{backgroundColor: "primary.main", padding: "10px"}}>Get Moving</LandingButton>
        </Box>
        <Box sx={{
          display: "flex",
          width: "100%",
          alignItems: "end",
          gap: "100px"
        }}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px"
          }}>
            <Link href={"/"} sx={{...iconLinkStyles}}>
              <FacebookIcon/>
            </Link>
            <Link href={"/"} sx={{...iconLinkStyles}}>
              <InstagramIcon/>
            </Link>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}>
            {links.map((link, i) => {
              return <NavLink key={i}
                              to={"/landing"}
                              style={{
                                textDecoration: "none", color: "inherit",
                                textShadow: "0px 3px 4px rgba(150, 150, 150, 1)"
                              }}>
                {link}
              </NavLink>
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  )
    ;
};

export default Footer;
