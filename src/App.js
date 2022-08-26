import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme/theme";
import { Container, CssBaseline } from "@mui/material";
import bg from "./styles/images/bg.png";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpPage from "./pages/HelpPage";
import SideBar from "./components/SideBar";

const App = () => {
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
          gap: "30px",
        }}
      >
        <SideBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/findaclass"} element={<FindAClass />} />
          <Route path={"/favorites"} element={<Favorites />} />
          <Route path={"/settings"} element={<Settings />} />
          <Route path={"/help&resources"} element={<HelpPage />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default App;
