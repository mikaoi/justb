import { NavLink, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme/theme";
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
import bg from "./styles/images/bg.png";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpPage from "./pages/HelpPage";
import SideBar from "./components/SideBar";
import Category from "./pages/Category";
import { useState } from "react";

const App = () => {
  const drawerWidth = 350;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        style={{
          padding: "0",
          backgroundImage: `url(${bg})`,
          minHeight: "100vh",
          minWidth: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          fontFamily: "Scheme",
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
            flexGrow: 1,
            width: {
              xs: `calc(100% - ${drawerWidth - 50}px)`,
              "3xl": `calc(100% - ${drawerWidth}px)`,
            },
          }}
        >
          <AppBar
            sx={{
              height: "60px",
              display: { xs: "flex", "2xl": "none" },
            }}
          >
            <Toolbar>
              <NavLink to={"/"} style={{ height: "40px" }}>
                <img src={logo} width={"40px"} alt={"Logo"} />
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
                xs: "90px 20px 20px 20px",
                "2xl": "25px 30px",
              },
              height: "100%",
            }}
          >
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/findaclass"} element={<FindAClass />} />
              <Route path={"/favorites"} element={<Favorites />} />
              <Route path={"/settings"} element={<Settings />} />
              <Route path={"/help&resources"} element={<HelpPage />} />
              {/*<Route path={"/category"} element={<Category />} />*/}
              <Route path={"/favorites/:category"} element={<Category />} />
            </Routes>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
