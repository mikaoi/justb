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
import BodyScan from "./pages/BodyScan";
import HelpPage from "./pages/HelpPage";
import Category from "./pages/Category";
import Login from "./pages/Login";
import SignUp from './pages/SignUp'
import {ClerkProvider} from "@clerk/clerk-react";

const App = () => {

  // const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
       {/*<ClerkProvider frontendApi={frontendApi} navigate={(to) => navigate(to)}>*/}
      <CssBaseline/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/findaclass"} element={<FindAClass/>}/>
        <Route path={"/favorites"} element={<Favorites/>}/>
        <Route path={"/settings"} element={<Settings/>}/>
        <Route path={"/help&resources"} element={<HelpPage/>}/>
        <Route path={"/bodyscan"} element={<BodyScan/>}/>
        <Route path={"/signup"} element={<SignUp/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/favorites/:category"} element={<Category/>}/>
      </Routes>
      {/*</ClerkProvider>*/}
    </ThemeProvider>
  );
};

export default App;
