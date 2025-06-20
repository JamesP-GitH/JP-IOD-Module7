import React from "react";
import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function Bitcoin() {
    return (
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Bitcoin Exchange Rate
                        </Typography>
                        <BitcoinRates />
                    </CardContent>
                </Card>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Change Emoji
                        </Typography>
                        <Emoji />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default Bitcoin;
