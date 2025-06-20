import React from "react";
import { useState } from "react";
import Clock from "./Clock";
import { Button, Box } from "@mui/material";

function ClockDisplay() {
    const [showClock, setShowClock] = useState(false);

    const toggleClock = () => {
        setShowClock(!showClock);
    };

    return (
        <Box className="ClockDisplay componentBox" sx={{ textAlign: "center", mt: 2 }}>
            <Button variant="outlined" onClick={toggleClock}>
                {showClock ? "Hide Clock" : "Show Clock"}
            </Button>
            {showClock && (
                <Box sx={{ mt: 2 }}>
                    <Clock />
                </Box>
            )}
        </Box>
    );
}
export default ClockDisplay;
