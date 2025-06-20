import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Navbar() {
    return (
        <AppBar position="fixed" component="nav" sx={{ width: "100vw", padding: 0, margin: 0 }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "left" }}>
                    React Site
                </Typography>
                <Button color="inherit" component={NavLink} to="/" end>
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/login">
                    Login
                </Button>
                <Button color="inherit" component={NavLink} to="/bitcoin">
                    Bitcoin Rates
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
