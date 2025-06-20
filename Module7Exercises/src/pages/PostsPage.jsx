import { Outlet, Link as RouterLink } from "react-router-dom";
import useData from "../hooks/useData";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
    Typography,
    CircularProgress,
    Box,
    List,
    ListItem,
    ListItemText,
    Paper,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Link,
    ListItemButton,
} from "@mui/material";

export default function PostsPage() {
    return (
        <Paper sx={{ padding: 3, maxWidth: 600, margin: "auto", mt: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Posts
            </Typography>
            <Outlet />
        </Paper>
    );
}

export function PostList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const limit = searchParams.get("limit") || 5;
    const url =
        limit === "All" ? "https://jsonplaceholder.typicode.com/posts" : `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`;
    const { data: postsData, loading, error } = useData(url);

    const handleChangeLimit = (e) => {
        setSearchParams({ limit: e.target.value });
    };

    if (loading) {
        return <Typography>Loading posts...</Typography>;
    }

    if (error) {
        return <Typography color="error">Error: {error}</Typography>;
    }

    return (
        <Box sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
            <Typography variant="h6" gutterBottom>
                Posts (Limit: {limit})
            </Typography>

            <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="limit-label">Number of Posts</InputLabel>
                <Select labelId="limit-label" value={limit} label="Number of Posts" onChange={handleChangeLimit}>
                    {[5, 10, 15, 20, "All"].map((num) => (
                        <MenuItem key={num} value={num}>
                            {num}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <List>
                {Array.isArray(postsData) && postsData.length > 0 ? (
                    postsData.map((post) => (
                        <ListItem key={post.id} divider disablePadding>
                            <ListItemButton component={RouterLink} to={`/posts/${post.id}`}>
                                <ListItemText primary={`Post #${post.id}: ${post.title}`} />
                            </ListItemButton>
                        </ListItem>
                    ))
                ) : (
                    <Typography>No posts found.</Typography>
                )}
            </List>
        </Box>
    );
}

export function Post() {
    const { id } = useParams();
    const { data: post, loading, error } = useData(`https://jsonplaceholder.typicode.com/posts/${id}`);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography color="error">Error: {error}</Typography>
            </Box>
        );
    }

    if (!post || !post.id) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Typography>No post found.</Typography>
            </Box>
        );
    }
    
    return (
        <Paper sx={{ p: 3, mt: 2, maxWidth: 600, margin: "auto" }}>
            <Typography variant="h5" component="h3" gutterBottom>
                Post #{post.id}: {post.title}
            </Typography>
            <Typography variant="body1">{post.body}</Typography>
        </Paper>
    );
}
