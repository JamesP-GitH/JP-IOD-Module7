import React from "react";
import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const tick = () => {
        setDate(new Date());
        console.log("tick");
    };

    return (
        <Box className="Clock" sx={{ mt: 2 }}>
            <Typography variant="h6" component="h3">
                Digital Clock
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "monospace", fontSize: "1.5rem" }}>
                {date.toLocaleTimeString()}
            </Typography>
        </Box>
    );
}

export default Clock;
