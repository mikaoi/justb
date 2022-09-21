import bg from "../../styles/images/Blue.png";
import {AppBar, IconButton, Toolbar, Container, Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import logo from "../../styles/images/logo.svg";
import MenuIcon from "@mui/icons-material/Menu";
import React, {Fragment, useState} from "react";
import SideBar from "./SideBar";


export default function MainLayout({children}) {
  const drawerWidth = 330;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  return (
    <Fragment>
      <main>
        <Container
          style={{
            padding: "0",
            minHeight: "100vh",
            minWidth: "100%",
            display: "flex",
            fontFamily: "Scheme",
            position: "relative",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "300px",
          }}
        >
          <SideBar
            mobileOpen={mobileOpen}
            width={drawerWidth}
            setMenu={handleDrawerToggle}
          />
          <Box
            component="main"
            sx={{
              width: "100%",
              position: "relative",
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <AppBar
              sx={{
                height: "60px",
                display: {xs: "flex", "2xl": "none"},
              }}
            >
              <Toolbar>
                <NavLink to={"/"} style={{height: "40px"}}>
                  <img src={logo} width={"40px"} alt={"Logo"}/>
                </NavLink>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{
                    color: "lightColor.main",
                    marginLeft: "auto",
                    paddingRight: 0,
                  }}
                >
                  <MenuIcon
                    sx={{
                      width: "30px",
                      height: "30px",
                    }}
                  />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box
              sx={{
                padding: {
                  xs: "80px 20px 20px 20px",
                  "2xl": "15px 30px",
                },
                height: "100%",
                marginLeft: "auto"
              }}
            >
              {children}
            </Box>
          </Box>
        </Container>
      </main>
    </Fragment>
  );
}
