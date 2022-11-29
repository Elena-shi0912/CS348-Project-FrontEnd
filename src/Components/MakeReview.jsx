import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useLocation } from "react-router-dom";
import "./MakeReview.css";
import Axios from "axios";
import Post from "./Post.jsx";

export default function MakeReview(props) {
    const [comment, setComment] = useState("");
    const location = useLocation();

    console.log(location);

    return (
        <div>
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
            <div className="Review">
                <h1 />
                <Post
                    pickup_location={props.pickup_location}
                    dropoff_location={props.dropoff_location}
                    pickup_time={"props.pickup_time"}
                    available_seats={props.available_seats}
                    price_per_seat={props.price_per_seat}
                    additional_info={props.additional_info}
                    post_id={props.post_id}
                    book={""}
                />
                <h1 />
                <div class="row g-3">
                    <div class="col-12">
                        <label for="inputPassword4" class="form-label">
                            Comment:
                        </label>
                        <textarea
                            onChange={(e) => {
                                setComment(e.target.value);
                            }}
                            rows="3"
                            class="form-control"
                        ></textarea>
                    </div>
                    <div class="col-5">
                        <div class="container">
                            <span id="rateMe1"></span>
                        </div>
                        <script src="js/addons/rating.js"></script>
                    </div>
                </div>
            </div>
        </div>
    );
}
