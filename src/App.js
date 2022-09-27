import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme/theme";
import {
  CssBaseline,
} from "@mui/material";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";

// Clerk API sign up
import { ClerkProvider } from "@clerk/clerk-react";

import HelpPage from "./pages/HelpPage";
import Category from "./pages/Category";
import BodyScan from "./pages/BodyScan";
import LandingPage from "./pages/LandingPage";
import Settings from './pages/Settings'

// Signup API
const frontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

const App = () => {

  return (
    <ThemeProvider theme={theme}>
       <ClerkProvider frontendApi={frontendApi}>
      <CssBaseline/>
      <Routes>
     
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/findaclass"} element={<FindAClass/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        <Route path={"/help&resources"} element={<HelpPage/>}/>
        <Route path={"/bodyscan"} element={<BodyScan/>}/>
        <Route path={"/signup"} element={<LandingPage/>}/>
        <Route path={"/favorites/:category"} element={<Category/>}/>
        
      </Routes>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default App;
