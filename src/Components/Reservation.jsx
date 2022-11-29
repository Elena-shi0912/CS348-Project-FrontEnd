import React, { useState, useEffect } from "react";
import "./UserPosting.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function UserPosting() {
    const [isLoading, setLoading] = useState(true);
    const [getposts, setGetposts] = useState([
        {
            post_id: "0",
            pickup_location: "Toronto",
            dropoff_location: "Waterloo",
            pickup_time: "2022-11-29 11:00:00",
            available_seats: "4",
            price_per_seat: "100000",
            additional_info: "",
        },
        {
            post_id: "0",
            pickup_location: "Markham",
            dropoff_location: "Waterloo",
            pickup_time: "2022-11-29 11:00:00",
            available_seats: "4",
            price_per_seat: "100000",
            additional_info: "",
        },
        {
            post_id: "0",
            pickup_location: "Gulphe",
            dropoff_location: "Kingston",
            pickup_time: "2022-11-29 11:00:00",
            available_seats: "4",
            price_per_seat: "100000",
            additional_info: "",
        },
    ]);

    useEffect(() => {
        var currentdate = new Date();
        var datetime =
            currentdate.getFullYear() +
            "-" +
            (currentdate.getMonth() + 1) +
            "-" +
            currentdate.getDate() +
            " " +
            currentdate.getHours() +
            ":" +
            currentdate.getMinutes() +
            ":" +
            currentdate.getSeconds();
        Axios.post("http://localhost:3001/api/reserveInfo", {
            datetime: datetime,
        }).then((response) => {
            setGetposts(response.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="main">
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Find Ride
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    aria-current="page"
                                    href="/userPosting"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/reservation">
                                    My Reservation
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/userReview">
                                    Review
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 />
            <div className="posting">
                {getposts.map((item) => {
                    return (
                        <Post
                            post_id={item.post_id}
                            pickup_location={item.pickup_location}
                            dropoff_location={item.dropoff_location}
                            pickup_time={item.pickup_time}
                            available_seats={item.available_seats}
                            price_per_seat={item.price_per_seat}
                            additional_info={item.additional_info}
                            button={"reserve"}
                        />
                    );
                })}
            </div>
        </div>
    );
}
