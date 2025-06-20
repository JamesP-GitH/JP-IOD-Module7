import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";
import { TextField, Button, Typography, Box, Stack, Paper } from "@mui/material";

export default function LoginForm() {
    const [status, setStatus] = useState("");
    const [nameInputProps, resetName] = useFormInput("Mary");
    const [emailInputProps, resetEmail] = useFormInput("mary@pop.com");
    const [passwordInputProps, resetPassword] = useFormInput("1234567");

    function handleLogin() {
        resetName();
        resetEmail();
        resetPassword();
        setStatus("Thanks for logging in!");
    }
    return (
        <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <Paper elevation={3} sx={{ p: 4, width: 400 }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>

                <Stack spacing={2}>
                    <TextField label="First Name" fullWidth {...nameInputProps} />
                    <TextField label="Email" fullWidth {...emailInputProps} />
                    <TextField label="Password" type="password" fullWidth {...passwordInputProps} />
                    <Button variant="contained" fullWidth onClick={handleLogin}>
                        Login
                    </Button>
                    <Typography variant="body2" color="success.main">
                        {"-"}
                        {status}
                        {"-"}
                    </Typography>
                </Stack>
            </Paper>
        </Box>
    );
}
