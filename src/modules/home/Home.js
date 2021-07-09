import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import DeleteSweepOutlinedIcon from "@material-ui/icons/DeleteSweepOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import PowerSettingsNewOutlinedIcon from "@material-ui/icons/PowerSettingsNewOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";

import {  Link, NavLink} from "react-router-dom";

import Navigation from "../../config/navigation/Navigation";




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#363740",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" Wrap>
            Attend Link
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Typography variant="h6" noWrap>
            Admin Area &nbsp; &nbsp; &nbsp;
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />

        <List>
          <NavLink activeClassName="active_class" className="mu" exact to="/">
            <ListItem button key="Today Overview">
              <ListItemIcon>
                <AssessmentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Today Overview" />
              <br />
              <br />
              <br />
            </ListItem>
          </NavLink>

          <NavLink
            activeClassName="active_class"
            className="mu"
            exact
            to="/addteacher"
          >
            <ListItem button key="Add Teacher">
              <ListItemIcon>
                <PersonAddOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Add Teacher"
                style={{ textDecoration: "none" }}
              />
              <br />
              <br />
              <br />
            </ListItem>
          </NavLink>

          <NavLink
            activeClassName="active_class"
            className="mu"
            exact
            to="/allrecords"
          >
            <ListItem button key="All Records">
              <ListItemIcon>
                <AssignmentIndOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="All Records"
                style={{ textDecoration: "none" }}
              />
              <br />
              <br />
              <br />
            </ListItem>
          </NavLink>

          <NavLink
            activeClassName="active_class"
            className="mu"
            exact
            to="/chechkrecord"
          >
            <ListItem button key="Check Attendance">
              <ListItemIcon>
                <AssignmentTurnedInOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary="Check Attendance"
                style={{ textDecoration: "none" }}
              />
              <br />
              <br />
              <br />
            </ListItem>
          </NavLink>
        </List>

        <Divider />
        <NavLink activeClassName="active_class" className="mu" exact to="/auth">
          <List>
            <ListItem button key="Logout">
              <br />
              <br />
              <br />

              <ListItemIcon>
                <PowerSettingsNewOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </NavLink>
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Navigation />
      </main>
    </div>
  );
}





