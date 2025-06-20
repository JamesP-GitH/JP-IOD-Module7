import React, { createContext, useContext, useState } from "react";

const EmojiContext = createContext();

function EmojiProvider(props) {
    const [currentEmoji, setCurrentEmoji] = useState("🙂");

    function handleUpdateEmoji(emoji) {
        setCurrentEmoji(emoji);
    }

    return <EmojiContext.Provider value={{ currentEmoji, handleUpdateEmoji }}>{props.children}</EmojiContext.Provider>;
}

export const useEmojiContext = () => {
    return useContext(EmojiContext);
};

export default EmojiProvider;
