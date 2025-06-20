import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

function Navbar() {
    const theme = useTheme();
    return (
        <AppBar
            position="fixed"
            component="nav"
            sx={{
                width: "100vw",
                padding: 0,
                margin: 0,
                backgroundColor: theme.palette.primary.main,
                boxShadow: theme.shadows[4],
            }}
        >
            <Toolbar>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flexGrow: 1,
                        textAlign: "left",
                        color: theme.palette.text.primary,
                    }}
                >
                    React Site
                </Typography>

                <Button color="inherit" component={NavLink} to="/" end sx={{ color: theme.palette.secondary.light }}>
                    Home
                </Button>
                <Button color="inherit" component={NavLink} to="/login" sx={{ color: theme.palette.secondary.light }}>
                    Login
                </Button>
                <Button color="inherit" component={NavLink} to="/bitcoin" sx={{ color: theme.palette.secondary.light }}>
                    Bitcoin Rates
                </Button>
                <Button color="inherit" component={NavLink} to="/posts" sx={{ color: theme.palette.secondary.light }}>
                    Posts
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
