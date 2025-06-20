import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Bitcoin from "../pages/Bitcoin";
import PostsPage, { Post, PostList } from "../pages/PostsPage";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin" element={<Bitcoin />} />
            <Route path="/posts" element={<PostsPage {...props} />}>
                <Route index element={<PostList />} />
                <Route path=":id" element={<Post />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;
