import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function DriverPosting() {
    const [getposts, setGetposts] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [time, setTime] = useState("2022-12-12T19:30");
    const [seats, setSeats] = useState("");
    const [price, setPrice] = useState("");
    const [info, setInfo] = useState("");
    const [submit, setSubmit] = useState(0);

    useEffect(() => {
        Axios.post("http://localhost:3001/api/addPosting", {
            from: from,
            to: to,
            date: time.substring(0, 9),
            time: time.substring(11, 15),
            seats: seats,
            price: price,
            info: info,
        }).then((response) => {
            alert(response.data);
        });
        Axios.post("http://localhost::3001/api/dbinfo").then((response) => {
            setGetposts(response.data);
        });
    }, [submit]);

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
                                    href="/driverPosting"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/feedback">
                                    My Feedback
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
                <form class="row g-3">
                    <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">
                            From
                        </label>
                        <input
                            onChange={(e) => {
                                setFrom(e.target.value);
                            }}
                            class="form-control"
                        />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">
                            To
                        </label>
                        <input
                            onChange={(e) => {
                                setTo(e.target.value);
                            }}
                            class="form-control"
                        />
                    </div>
                    <div class="col-md-4">
                        <label for="inputEmail4" class="form-label">
                            Time
                        </label>
                        <input
                            type="datetime-local"
                            value="2022-12-12T19:30"
                            min="2022-06-07T00:00"
                            max="2030-06-14T00:00"
                            class="form-control"
                            onChange={(e) => {
                                setTime(e.target.value);
                            }}
                        />
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">
                            Seats available
                        </label>
                        <input
                            onChange={(e) => {
                                setSeats(e.target.value);
                            }}
                            class="form-control"
                        />
                    </div>
                    <div class="col-md-4">
                        <label for="inputPassword4" class="form-label">
                            Price per seat
                        </label>
                        <input
                            onChange={(e) => {
                                setPrice(e.target.value);
                            }}
                            class="form-control"
                        />
                    </div>
                    <div class="col-12">
                        <label for="inputPassword4" class="form-label">
                            Additional info
                        </label>
                        <textarea
                            onChange={(e) => {
                                setInfo(e.target.value);
                            }}
                            rows="3"
                            class="form-control"
                        ></textarea>
                    </div>
                    <div class="col-12">
                        <button
                            onClick={(e) => {
                                setSubmit(submit + 1);
                            }}
                            type="submit"
                            class="btn btn-primary"
                        >
                            Add Posting!
                        </button>
                    </div>
                </form>
                <h1 />
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
                            book={true}
                        />
                    );
                })}
            </div>
        </div>
    );
}
