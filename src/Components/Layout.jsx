import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup.jsx";
import Posting from "./Posting.jsx";
import Signin from "./Signin.jsx";

export default function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/posting" element={<Posting />} />
                <Route path="/signin" element={<Signin />} />
            </Routes>
        </BrowserRouter>
    );
}
