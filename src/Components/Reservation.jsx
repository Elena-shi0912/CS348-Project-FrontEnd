import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserPosting.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function UserPosting() {
    const [isLoading, setLoading] = useState(true);
    const [getposts, setGetposts] = useState([
        {
            post_id: "",
            pickup_location: "Toronto",
            dropoff_location: "Waterloo",
            pickup_time: "2022/10/22 10:00",
            available_seats: "4",
            price_per_seat: "10000",
            additional_info: "",
        },
        {
            post_id: "",
            pickup_location: "Waterloo",
            dropoff_location: "Vancouver",
            pickup_time: "2022/10/22 3:00",
            available_seats: "4",
            price_per_seat: "10000",
            additional_info: "",
        },
    ]);

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    useEffect(() => {
        Axios.get("http://localhost:3001/api/reserveInfo").then((response) => {
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
                            book={false}
                        />
                    );
                })}
            </div>
        </div>
    );
}
