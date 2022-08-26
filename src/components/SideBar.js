import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { createStyles, makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { ReactComponent as Avatar } from "../styles/images/navImg/avatar.svg";
import { ReactComponent as Logo } from "../styles/images/logo.svg";
import bg from "../styles/images/navImg/navShapes.svg";
import home from "../styles/images/navImg/home.png";
import find from "../styles/images/navImg/class.png";
import fav from "../styles/images/navImg/fav.png";
import settings from "../styles/images/navImg/settings.png";
import help from "../styles/images/navImg/help.png";
import { Card, Typography } from "@mui/material";
import CustomBorderLinearProgress from "./ProgressDiagram/CustomBorderLinearProgress";

const drawerWidth = 380;

const MyNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
  >
    {props.children}
  </NavLink>
));

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      fontSize: "30px",
      fontFamily: "SchemeLt-Regular",
      display: "flex",
      gap: "17px",
      padding: "8px 30px",
    },
    activeLink: {
      backgroundColor: "#FFFFFF",
      fontFamily: "SchemeRg-Bold",
      borderRadius: "20px 0 0 20px",
    },
  })
);
export default function SideBar(props) {
  const classes = useStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const linkInfo = [
    { text: "Home", icon: home },
    { text: "Find a class", icon: find },
    { text: "Favorites", icon: fav },
    { text: "Settings", icon: settings },
    { text: "Help & Resources", icon: help },
  ];

  const drawer = (
    <Box>
      <Box
        sx={{
          backgroundColor: "#FFCB12",
          height: "30vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Logo style={{ position: "absolute", top: "25px", left: "20px" }} />
        <Avatar style={{ position: "absolute", top: "15%", left: "25%" }} />
      </Box>
      <Box sx={{ textAlign: "center", paddingTop: "60px" }}>
        Ms. Wilson’s Class
        <Typography> 3rd Grade</Typography>
      </Box>
      <Box
        sx={{
          padding: "40px 0 30px 35px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {linkInfo.map((link, index) => (
          <Link
            component={MyNavLink}
            key={index}
            className={classes.link}
            activeClassName={classes.activeLink}
            disablePadding
            to={`/${
              link.text === "Home"
                ? ""
                : link.text.replace(/\s/g, "").toLowerCase()
            }`}
          >
            <img
              src={link.icon}
              alt={link.text}
              style={{ width: "38px", height: "38px" }}
            />
            {link.text}
          </Link>
        ))}
        <CustomBorderLinearProgress
          variant="determinate"
          value={80}
          width={"280px"}
        />
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0 20px 20px 0",
              border: "none",
              backgroundColor: "#F3F1F4",
              boxShadow: "0px 30px 20px rgba(0, 0, 0, 0.25)",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRadius: "0 20px 20px 0",
              border: "none",
              backgroundColor: "#F3F1F4",
              boxShadow: "0px 30px 20px rgba(0, 0, 0, 0.25)",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
