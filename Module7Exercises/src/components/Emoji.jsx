import React from "react";
import { useEmojiContext } from "../context/EmojiContext";
import { Button, Box } from "@mui/material";

function Emoji() {
    const { currentEmoji, handleUpdateEmoji } = useEmojiContext();

    function updateEmoji() {
        const emojis = ["🙂", "🙁", "😎", "😡", "😂"];
        const random = emojis[Math.floor(Math.random() * emojis.length)];
        handleUpdateEmoji(random);
    }

    return (
        <Box className="MoodChanger componentBox" sx={{ textAlign: "center", mt: 2 }}>
            <Button variant="contained" color="primary" onClick={updateEmoji}>
                Change Emoji
            </Button>
        </Box>
    );
}

export default Emoji;
