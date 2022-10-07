import {Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./styles/theme/theme";
import {
  CssBaseline,
} from "@mui/material";
import Home from "./pages/Home";
import FindAClass from "./pages/FindAClass";
import Favorites from "./pages/Favorites";

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
        <Route path={"/signup"} element={<SignUp/>}/>
        <Route path={"/signup/personal"} element={<PersonalAccountForm/>}/>
        <Route path={"/favorites/:category"} element={<Category/>}/>
        
      </Routes>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default App;
