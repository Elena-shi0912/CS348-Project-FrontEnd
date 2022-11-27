import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup.jsx";
import UserPosting from "./UserPosting.jsx";
import Signin from "./Signin.jsx";

export default function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/userPosting" element={<UserPosting />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="" />
            </Routes>
        </BrowserRouter>
    );
}
