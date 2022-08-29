import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import { createStyles, makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import avatar from "../styles/images/navImg/avatar.svg";
import { ReactComponent as Logo } from "../styles/images/logo.svg";
import { ReactComponent as Close } from "../styles/images/navImg/closeBtn.svg";
import bg from "../styles/images/navImg/navShapes.svg";
import home from "../styles/images/navImg/home.png";
import find from "../styles/images/navImg/class.png";
import fav from "../styles/images/navImg/fav.png";
import settings from "../styles/images/navImg/settings.png";
import help from "../styles/images/navImg/help.png";
import { Typography, Button, Avatar, Stack } from "@mui/material";
import CustomBorderLinearProgress from "./ProgressDiagram/CustomBorderLinearProgress";
import { theme } from "../styles/theme/theme";

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
      fontSize: "23px",
      fontFamily: "SchemeLt-Regular",
      display: "flex",
      alignItems: "center",
      gap: "17px",
      padding: "8px 30px",
      "& span": {
        lineHeight: 1,
        marginTop: "5px",
      },
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
  const { window, mobileOpen, setMenu, width } = props;

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
        bgcolor={"primary.main"}
        sx={{
          backgroundColor: theme.palette.background,
          height: "200px",
          backgroundImage: `url(${bg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <NavLink to={"/"}>
          <Logo
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
            }}
          />
        </NavLink>
        <Avatar
          src={avatar}
          sx={{
            height: "170px",
            width: "170px",
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </Box>
      <Stack spacing={1} sx={{ textAlign: "center", paddingTop: "60px" }}>
        <Typography variant={"body1"} component={"div"}>
          Ms. Wilson’s Class
        </Typography>
        <Typography variant={"caption"} component={"div"}>
          3rd Grade
        </Typography>
      </Stack>
      <Box
        sx={{
          padding: "30px 0 30px 35px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
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
              style={{ width: "32px", height: "32px" }}
            />
            <span>{link.text}</span>
          </Link>
        ))}
        <CustomBorderLinearProgress
          sx={{ marginTop: 4 }}
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
          width: { sm: width },
          flexShrink: { sm: 0 },
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
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: width,
              borderRadius: "0 20px 20px 0",
              border: "none",
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
              width: width,
              height: "100vh",
              borderRadius: "0 20px 20px 0",
              border: "none",
              boxShadow: theme.shadows[3],
              position: "absolute",
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
              left: width - 10,
              zIndex: 1300,
              display: { xs: "block", sm: "none" },
            }}
          >
            <Close style={{ width: "20px", height: "20px" }} />
          </Button>
        )}
      </Box>
    </Box>
  );
}
