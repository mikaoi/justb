import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme/theme";
import {
  CssBaseline,
} from "@mui/material";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";
import Settings from "./pages/Settings";
import HelpPage from "./pages/HelpPage";
import Category from "./pages/Category";
import BodyScan from "./pages/BodyScan";
import LandingPage from "./pages/LandingPage";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/findaclass"} element={<FindAClass/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        <Route path={"/help&resources"} element={<HelpPage/>}/>
        <Route path={"/bodyscan"} element={<BodyScan/>}/>
        <Route path={"/landing"} element={<LandingPage/>}/>
        <Route path={"/favorites/:category"} element={<Category/>}/>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
