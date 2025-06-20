import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Bitcoin from "../pages/Bitcoin";

function AppRoutes(props) {
    return (
        <Routes>
            <Route index element={<Homepage {...props} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bitcoin" element={<Bitcoin />} />
        </Routes>
    );
}

export default AppRoutes;
