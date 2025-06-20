import React from "react";
import { useState, useEffect } from "react";
import useData from "../hooks/useData";
import { useEmojiContext } from "../context/EmojiContext";
import { Box, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { useTheme } from "@mui/material";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
    const theme = useTheme();
    const [currency, setCurrency] = useState(currencies[0]);

    const { data, loading, error } = useData(`/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);
    const [bitcoinPrice, setBitcoinPrice] = useState("Loading...");
    const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

    useEffect(() => {
        if (loading) {
            setBitcoinPrice("Loading...");
        } else if (error) {
            setBitcoinPrice("Error loading data");
        } else if (data && data.bitcoin && data.bitcoin[currency.toLowerCase()] !== undefined) {
            setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
        } else {
            setBitcoinPrice("Unavailable (May be due to too many requests)");
        }
    }, [data, loading, error, currency]);

    const options = currencies.map((curr) => (
        <option value={curr} key={curr}>
            {curr}
        </option>
    ));

    return (
        <Box
            className="BitcoinRates componentBox"
            sx={{
                p: theme.spacing(3),
                backgroundColor: theme.palette.background.paper,
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[2],
                color: theme.palette.text.primary,
            }}
        >
            <FormControl fullWidth sx={{ mb: theme.spacing(2) }}>
                <InputLabel id="currency-label">Choose Currency</InputLabel>
                <Select labelId="currency-label" value={currency} onChange={(e) => setCurrency(e.target.value)} label="Choose Currency">
                    {currencies.map((curr) => (
                        <MenuItem key={curr} value={curr}>
                            {curr}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Typography variant="body1" sx={{ mb: 1 }}>
                Exchange Rate: <strong style={{ color: theme.palette.primary.main }}>{bitcoinPrice}</strong> {currency}
            </Typography>

            <Typography variant="body1" sx={{ color: theme.palette.secondary.main }}>
                Current Emoji: {currentEmoji}
            </Typography>
        </Box>
    );
}

export default BitcoinRates;
