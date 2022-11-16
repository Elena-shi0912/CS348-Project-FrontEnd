import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";
import Posting from "./Posting.jsx";
import Signin from "./Signin.jsx";

export default function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/posting" element={<Posting />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
}
