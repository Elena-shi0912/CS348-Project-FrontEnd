import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Signup from "./Signup.jsx";
import UserPosting from "./UserPosting.jsx";
import Signin from "./Signin.jsx";
import Reservation from "./Reservation.jsx";
import DriverPosting from "./DriverPosting";
import Review from "./Review.jsx";
import MakeReview from "./MakeReview.jsx";

export default function Layout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/userPosting" element={<UserPosting />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/reservation" element={<Reservation />} />
                <Route path="/driverPosting" element={<DriverPosting />} />
                <Route path="userReview" element={<Review />} />
                <Route path="/makeReview" element={<MakeReview />} />
            </Routes>
        </BrowserRouter>
    );
}
