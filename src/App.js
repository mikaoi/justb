import {NavLink, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme/theme";
import {
  Container,
  CssBaseline,
  Box,
  AppBar,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "./styles/images/logo.svg";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpPage from "./pages/HelpPage";
import SideBar from "./components/SideBar";
import Category from "./pages/Category";
import BodyScan from "./pages/BodyScan";
import React, {useState} from "react";
import bg from "./styles/images/Blue.png";

const App = () => {
  const drawerWidth = 330;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
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
          backgroundPosition:"300px",
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
            position:"relative",
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
            <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/findaclass"} element={<FindAClass/>}/>
              <Route path={"/favorites"} element={<Favorites/>}/>
              <Route path={"/settings"} element={<Settings/>}/>
              <Route path={"/help&resources"} element={<HelpPage/>}/>
              <Route path={"/bodyscan"} element={<BodyScan/>}/>
              <Route path={"/favorites/:category"} element={<Category/>}/>
            </Routes>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
