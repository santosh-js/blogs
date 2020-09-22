import React, { useState, useEffect, Suspense } from "react";
import { lightTheme, darkTheme } from "./Themes";
import logo from "../../../assets/logo/earth.png";
import { useTheme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { withStyles } from "@material-ui/core/styles";
import {
  Toolbar,
  IconButton,
  AppBar,
  Menu,
  MenuItem,
  Typography,
  Button,
  Tooltip,
  FormControl,
  FormHelperText,
  Select,
} from "@material-ui/core";
import { useStyles } from "./Navbar.style";
import { AccountCircle } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuIcon from "@material-ui/icons/Menu";
import { changeTheme } from "../../../actions/muiActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import serviceObj from "../../auth/services/AuthService";
import { useTranslation } from "react-i18next";
import { getMenuItems } from "./utils/menuItems";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "./utils/accordions";
import useCustomBreakpoint from "../../../hooks/useCustomBreakpoint";

function Navbar(props) {
  const classes = useStyles();

  // Props from Home component
  const { properties } = props;

  // menu items accordions expand boolean
  const [expanded, setExpanded] = useState("");

  // true for current breakpoint resolution breakpoint's set on global theme state object
  const [isMobile, isTab, isDesktop] = useCustomBreakpoint(
    properties.themeObject.theme
  );

  // app theme
  const [themeColor, setThemeColor] = useState(
    properties.themeObject.theme.palette.type
  );

  // i18next object & setup
  const { t, i18n } = useTranslation();
  // app language change actions
  const [language, setLanguage] = useState(i18n.language);

  // mobile version menuitems
  const menuItems = getMenuItems(t);

  // handle change for theme & language
  const handleChange = (event) => {
    if (event.target.name === "theme") {
      event.target.value !== "light"
        ? properties.changeTheme(darkTheme)
        : properties.changeTheme(lightTheme);
      setThemeColor(event.target.value);
    }
    if (event.target.name === "lang") {
      setLanguage(event.target.value);
      i18n.changeLanguage(event.target.value);
    }
  };

  // desktop menu items
  const [anchorEl, setAnchorEl] = useState(null);
  const openAnchorEl = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // mobile menu items
  const [hamburgerEl, setHamburgerEl] = useState(null);
  const openHamburgerEl = Boolean(hamburgerEl);
  const handleBurger = (event) => {
    setHamburgerEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    properties.url.push(pageURL);
    setHamburgerEl(null);
  };

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Navber transition
  const [scroll, setScroll] = useState(0);
  const [background, setBackground] = useState("transparent");
  const [position, setPosition] = useState("static");
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      if (background === "transparent") setBackground("primary");
    } else {
      if (background === "primary") setBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={classes.root}>
      <AppBar color={background} style={{ transition: "all 0.4s linear" }}>
        <Toolbar>
          {/*<img src={logo} alt="Spineor Logo" />*/}
          <Typography variant="h4" style={{ color: "#ffffff" }}>
            BlogSpot
          </Typography>
          <Typography className={classes.title} />
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                className={classes.menuButton}
                onClick={handleBurger}
              >
                <MenuIcon className={classes.fontColor} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={hamburgerEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={openHamburgerEl}
                onClose={() => setHamburgerEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <>
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>
                        {menuTitle}
                      </MenuItem>
                      <Divider />
                    </>
                  );
                })}
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleAccordionChange("panel1")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  >
                    <Typography className={classes.heading}>
                      {t("navbar.language")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl size="small" className={classes.formControl}>
                      <Select
                        value={language}
                        onChange={handleChange}
                        displayEmpty
                        autoWidth
                        name="lang"
                        className={classes.selectEmpty}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value={"en"}>{t("navbar.english")}</MenuItem>
                        <MenuItem value={"it"}>{t("navbar.italian")}</MenuItem>
                      </Select>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                <Divider />
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleAccordionChange("panel2")}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                    <Typography className={classes.heading}>
                      {t("navbar.theme")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormControl size="small" className={classes.formControl}>
                      <Select
                        value={themeColor}
                        onChange={handleChange}
                        displayEmpty
                        autoWidth
                        name="theme"
                        className={classes.selectEmpty}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value={"light"}>{t("navbar.light")}</MenuItem>
                        <MenuItem value={"dark"}>{t("navbar.dark")}</MenuItem>
                      </Select>
                    </FormControl>
                  </AccordionDetails>
                </Accordion>
                <Divider />

                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <Tooltip title="User actions">
                      <AccountCircle />
                    </Tooltip>
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={openAnchorEl}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={properties.handleOpen}>
                      {t("navbar.login")}
                    </MenuItem>
                    <MenuItem component={Link} to="/401" onClick={handleClose}>
                      {t("navbar.profile")}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/401"
                      onClick={() => {
                        serviceObj.logout();
                      }}
                    >
                      {t("logout")}
                    </MenuItem>
                  </Menu>
                </div>
              </Menu>
            </>
          ) : (
            <>
              <Tooltip title="Visit our blog page">
                <Button
                  className={classes.fontColor}
                  size="small"
                  component={Link}
                  to="/blogs"
                >
                  {t("navbar.blogs")}
                </Button>
              </Tooltip>
              <Tooltip title="About us">
                <Button
                  className={classes.fontColor}
                  size="small"
                  component={Link}
                  to="/about"
                >
                  {t("navbar.about")}
                </Button>
              </Tooltip>
              <Tooltip title="Contact us">
                <Button
                  className={classes.fontColor}
                  size="small"
                  component={Link}
                  to="/contact"
                >
                  {t("navbar.contact")}
                </Button>
              </Tooltip>
              <FormControl size="small" className={classes.formControl}>
                <Select
                  value={language}
                  onChange={handleChange}
                  displayEmpty
                  autoWidth
                  name="lang"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"en"}>{t("navbar.english")}</MenuItem>
                  <MenuItem value={"it"}>{t("navbar.italian")}</MenuItem>
                </Select>
                <FormHelperText className={classes.fontColor}>
                  {t("navbar.language")}
                </FormHelperText>
              </FormControl>
              <FormControl size="small" className={classes.formControl}>
                <Select
                  value={themeColor}
                  onChange={handleChange}
                  displayEmpty
                  autoWidth
                  name="theme"
                  className={classes.selectEmpty}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value={"light"}>{t("navbar.light")}</MenuItem>
                  <MenuItem value={"dark"}>{t("navbar.dark")}</MenuItem>
                </Select>
                <FormHelperText className={classes.fontColor}>
                  {t("navbar.theme")}
                </FormHelperText>
              </FormControl>

              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <Tooltip title="User actions">
                    <AccountCircle className={classes.fontColor} />
                  </Tooltip>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openAnchorEl}
                  onClose={handleClose}
                >
                  <MenuItem onClick={properties.handleOpen}>
                    {t("navbar.login")}
                  </MenuItem>
                  <MenuItem component={Link} to="/401" onClick={handleClose}>
                    {t("navbar.profile")}
                  </MenuItem>
                  <MenuItem
                    component={Link}
                    to="/401"
                    onClick={() => {
                      serviceObj.logout();
                    }}
                  >
                    {t("logout")}
                  </MenuItem>
                </Menu>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

// specifying the types of props passed to this component
Loading.propTypes = {
  themeObject: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

// getting the theme object from store as props
const mapStateToProps = (state) => ({
  themeObject: state.mui,
});

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

// here app catches the suspense from page in case translations are not yet loaded
function Loading(props) {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar properties={props} />
      {/* <Navbar username={props.match.params}/>  */}
    </Suspense>
  );
}

export default connect(mapStateToProps, { changeTheme })(Loading);