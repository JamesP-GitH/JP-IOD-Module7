import React from "react";
import { Typography, Container, Box } from "@mui/material";
import ClockDisplay from "../components/ClockDisplay";

function Home() {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Box className="componentBox" sx={{ textAlign: "center" }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Welcome to my React App
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Select a page using the navigation above.
                </Typography>
                <ClockDisplay />
            </Box>
        </Container>
    );
}

export default Home;
