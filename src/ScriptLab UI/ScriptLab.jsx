import {
  AppBar,
  Box,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import "./ScriptLab.css";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import {
  PlayArrow,
  KeyboardArrowDown,
  DeleteForever,
  AccountCircle,
  Home,
  FolderOpen,
  AddCircleOutline,
} from "@mui/icons-material";
import FormHolder from "./components/FormHolder";

export default function ScriptLab() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeIcon, setActiveIcon] = useState("");

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleIconSelection = (icon) => {
    setActiveIcon(icon);
  };

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-evenly",
  });
  const StyledBox = styled(Box)({
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    "&:hover": {
      opacity: 0.8,
    },
  });

  return (
    <div>
      <AppBar position="static" color="success">
        <StyledToolbar>
          <MenuIcon />
          <StyledBox onClick={handleMenu}>
            <PlayArrow sx={{ paddingTop: "10px", mr: 1 }} /> <p>Run</p>
            <KeyboardArrowDown fontSize="large" />
          </StyledBox>
          <StyledBox>
            <DeleteForever sx={{ mr: 1 }} /> <Typography>Delete</Typography>
          </StyledBox>

          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{ position: "absolute", right: 4, top: 3 }}
          >
            <MenuItem onClick={handleClose}>Run in this pane</MenuItem>
            <MenuItem onClick={handleClose}>Run side by side</MenuItem>
          </Menu>
        </StyledToolbar>
      </AppBar>
      <AppBar position="fixed" color="success" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <div className="footer-icon-container">
            <Home
              onClick={() => handleIconSelection("home")}
              className={`icon ${activeIcon === "home" ? "active" : ""}`}
            />
            <FolderOpen
              onClick={() => handleIconSelection("folder")}
              className={`icon ${activeIcon === "folder" ? "active" : ""}`}
            />
            <AddCircleOutline
              onClick={() => handleIconSelection("plus")}
              className={`icon ${activeIcon === "plus" ? "active" : ""}`}
            />
          </div>
        </Toolbar>
      </AppBar>
      <FormHolder />
    </div>
  );
}
