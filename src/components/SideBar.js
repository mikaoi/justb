import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import {createStyles, makeStyles} from "@mui/styles";
import {NavLink} from "react-router-dom";
import avatar from "../styles/images/navImg/avatar.svg";
import logo from "../styles/images/logo.svg";
import {ReactComponent as Close} from "../styles/images/navImg/closeBtn.svg";
import bg from "../styles/images/navImg/navShapes.svg";
import home from "../styles/images/navImg/home.png";
import find from "../styles/images/navImg/class.png";
import fav from "../styles/images/navImg/fav.png";
import settings from "../styles/images/navImg/settings.png";
import help from "../styles/images/navImg/help.png";
import character from '../styles/images/navImg/yellowCharacter.png'
import {Typography, Button, Avatar, Stack} from "@mui/material";
import {theme} from "../styles/theme/theme";

const MyNavLink = React.forwardRef((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({isActive}) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
  >
    {props.children}
  </NavLink>
));

const useStyles = makeStyles((theme) =>
  createStyles({
    link: {
      fontFamily: "SchemeLt-Regular",
      display: "flex",
      alignItems: "center",
      gap: "16px",
      padding: "5px 30px",
      "& span": {
        lineHeight: 1,
        marginTop: "5px",
      },
    },
    activeLink: {
      backgroundColor: theme.palette.lightColor.light,
      fontFamily: "SchemeRg-Bold",
      borderRadius: "20px 0 0 20px",
    },
  })
);
export default function SideBar(props) {
  const mobileWidth = 270;
  const classes = useStyles();
  const {window, mobileOpen, setMenu, width} = props;

  const linkInfo = [
    {text: "Home", icon: home},
    {text: "Find a class", icon: find},
    {text: "Favorites", icon: fav},
    {text: "Settings", icon: settings},
    {text: "Help & Resources", icon: help},
  ];

  const drawer = (
    <Box>
      <Box
        bgcolor={"primary.main"}
        sx={{
          backgroundColor: theme.palette.background,
          height: {xs: "150px", lg: "170px", "2xl": "190px"},
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <NavLink to={"/"}>
          <Avatar
            src={logo}
            sx={{
              height: {xs: "50px", "3xl": "70px"},
              width: "auto",
              position: "absolute",
              top: "16px",
              left: "16px",
            }}
          />
        </NavLink>
        <Avatar
          src={avatar}
          sx={{
            height: {xs: "120px", lg: "140px", "2xl": "150px"},
            width: "auto",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
      <Stack
        spacing={1}
        sx={{textAlign: "center", paddingTop: {xs: "40px", lg: "45px", "2xl": "50px"}}}
      >
        <Typography variant={"body1"} component={"div"}>
          Ms. Wilson’s Class
        </Typography>
        <Typography variant={"caption"} component={"div"}>
          3rd Grade
        </Typography>
      </Stack>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "10px",
        height: "calc(100vh - 300px)"
      }}>
        <Box
          sx={{
            padding: {xs: "20px 0 0 20px", "2xl": "25px 0 0 35px"},
            display: "flex",
            flexDirection: "column",
            gap: {xs: "10px", lg: "15px", "3xl": "20px"},
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
              sx={{fontSize: {xs: "16px", lg: "18px", "3xl": "20px"}}}
            >
              <img
                src={link.icon}
                alt={link.text}
                style={{width: "30px"}}
              />
              <span>{link.text}</span>
            </Link>
          ))}
          <Box sx={{width: {xs: "140px", "2xl": "180px"}}}>
            <img src={character} alt={"Character"} style={{width: "100%"}}/>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{position: "relative", minHeight: "100%"}}>
      <Box
        component="nav"
        sx={{
          width: {"2xl": width - 50, "3xl": width},
          flexShrink: {"2xl": 0},
        }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          disableScrollLock={true}
          onClose={setMenu}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: {xs: "block", "2xl": "none"},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: mobileWidth,
              borderRadius: "0 20px 20px 0",
              border: "none",
              minHeight: "100%"
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: {xs: "none", "2xl": "block"},
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: {xs: width - 50, "3xl": width},
              height: "100vh",
              borderRadius: "0 20px 20px 0",
              border: "none",
              boxShadow: theme.shadows[3],
              position: "absolute",
              minHeight: "100%"
            },
          }}
          open
        >
          {drawer}
        </Drawer>
        {mobileOpen && (
          <Button
            onClick={setMenu}
            sx={{
              position: "absolute",
              top: "20px",
              left: mobileWidth - 10,
              zIndex: 1300,
              display: {xs: "block", "2xl": "none"},
            }}
          >
            <Close
              style={{
                width: "20px",
                height: "20px",
                fill: theme.palette.lightColor.light,
              }}
            />
          </Button>
        )}
      </Box>
    </Box>
  );
}
