import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme/theme";
import {
  CssBaseline,
} from "@mui/material";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";

// Used for Clerkjs
import { useNavigate } from "react-router-dom";

// Clerk API sign up
// Import ClerkProvider
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// Get the Frontend API from the environment

import HelpPage from "./pages/HelpPage";
import Category from "./pages/Category";
import BodyScan from "./pages/BodyScan";
import LandingPage from "./pages/LandingPage";
import Settings from './pages/Settings'



// Signup API
const frontendApi = 'clerk.central.zebra-47.lcl.dev';



const App = () => {

  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
       <ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>
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
