import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    base: "/",
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://api.coingecko.com",
                changeOrigin: true,
                rewrite: (path) => {
                    console.log("Rewrite called with path:", path);
                    const newPath = path.replace(/^\/en\/api/, "");
                    console.log("Rewritten path:", newPath);
                    return newPath;
                },
            },
        },
        logLevel: "debug",
    },
});
