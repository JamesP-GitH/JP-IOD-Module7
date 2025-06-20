import React from "react";
import "./App.css";
import EmojiProvider from "./context/EmojiContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import { Theme } from "./themes/Theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
    return (
        <>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <EmojiProvider>
                    <Navbar />
                    <AppRoutes />
                </EmojiProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
