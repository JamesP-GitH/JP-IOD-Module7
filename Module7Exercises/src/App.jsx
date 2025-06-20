import React from "react";
import "./App.css";
import EmojiProvider from "./context/EmojiContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
    return (
        <>
            <EmojiProvider>
                <Navbar />
                <AppRoutes />
            </EmojiProvider>
        </>
    );
}

export default App;
