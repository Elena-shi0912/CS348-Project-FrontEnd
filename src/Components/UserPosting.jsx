import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserPosting.css";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function UserPosting() {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");
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
        console.log(from);
        Axios.post("http://localhost:3001/api/dbinfo", {
            From: from,
            To: to,
            SortBy: sortBy,
            Order: order,
        }).then((response) => {
            setGetposts(response.data);
            setLoading(false);
        });
    }, []);

    function getFromList() {
        var fromArray = getposts.map((object) => object.pickup_location);
        var unique = fromArray.filter(onlyUnique);
        return unique.map((object) => {
            return <option value={object}>{object}</option>;
        });
    }

    function getToList() {
        var from = getposts.map((object) => object.dropoff_location);
        var unique = from.filter(onlyUnique);
        return unique.map((object) => {
            return <option>{object}</option>;
        });
    }

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
                                    href="#"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    My Reservation
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    Profile
                                </a>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                class="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    Choose
                </div>
            </nav>
            <h1 />
            <div className="posting">
                <div class="row g-3">
                    <div class="col-md-5">
                        <label className="form-label">From</label>
                        <select
                            onChange={(e) => {
                                setFrom(e.target.value);
                            }}
                            class="form-select"
                            required
                        >
                            <option selected disabled value="">
                                Choose...
                            </option>
                            {getFromList()}
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label className="form-label">To</label>
                        <select class="form-select" required>
                            <option selected disabled value="">
                                Choose...
                            </option>
                            {getToList()}
                        </select>
                    </div>
                    <div class="d-grid col-md-2">
                        <h1 />
                        <button type="button" class="btn btn-primary">
                            Search!
                        </button>
                    </div>
                </div>
                <h1 />
                <div class="row g-3">
                    <div class="col-md-5">
                        <label className="form-label">Sort By</label>
                        <select class="form-select" required>
                            <option selected disabled value="">
                                Choose...
                            </option>
                            <option>Price</option>
                            <option>Seats Available</option>
                            <option>Time</option>
                        </select>
                    </div>
                    <div class="col-md-5">
                        <label className="form-label">Order</label>
                        <select class="form-select" required>
                            <option selected disabled value="">
                                Choose...
                            </option>
                            <option>Ascending</option>
                            <option>Descending</option>
                        </select>
                    </div>
                    <div class="d-grid col-md-2">
                        <h1 />
                        <button type="button" class="btn btn-primary">
                            Apply!
                        </button>
                    </div>
                </div>
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
                        />
                    );
                })}
            </div>
        </div>
    );
}
