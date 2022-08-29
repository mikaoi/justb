import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme/theme";
import {
  Container,
  CssBaseline,
  Box,
  AppBar,
  Button,
  Toolbar,
} from "@mui/material";
import logo from "./styles/images/logo.svg";
import bg from "./styles/images/bg.png";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpPage from "./pages/HelpPage";
import SideBar from "./components/SideBar";
import * as React from "react";

const App = () => {
  const drawerWidth = 350;
  const [mobileOpen, setMobileOpen] = React.useState(false);

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
          // flexDirection: { xs: "column", sm: "row" },
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
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <AppBar
            sx={{
              position: "sticky",
              height: "60px",
              display: { xs: "flex", sm: "none" },
            }}
          >
            <Toolbar>
              <img src={logo} width={"40px"} alt={"Logo"} />
              <Button
                sx={{
                  color: theme.palette.secondary.main,
                  width: "50px",
                  marginLeft: "auto",
                }}
                onClick={handleDrawerToggle}
              >
                text
              </Button>
            </Toolbar>
          </AppBar>
          <Box
            sx={{
              padding: "25px 30px",
              height: "100%",
            }}
          >
            <Routes>
              <Route path={"/"} element={<Home />} />
              <Route path={"/findaclass"} element={<FindAClass />} />
              <Route path={"/favorites"} element={<Favorites />} />
              <Route path={"/settings"} element={<Settings />} />
              <Route path={"/help&resources"} element={<HelpPage />} />
            </Routes>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
